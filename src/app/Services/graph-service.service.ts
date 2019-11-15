import { Injectable } from '@angular/core';
import { MeasurementTypeService } from './measurement-type.service';
import { MeasurementService } from './measurement.service';
import { ChartDataSets } from 'chart.js';
import { StorageMap } from '@ngx-pwa/local-storage';
import { GraphClient, GraphMeasurementRequest, GraphData, Measurement, GraphDataObject } from './mapster.client';
import { AreaService } from './area.service';
import { PubSubService } from './pub-sub.service';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  public TypeSettings: Map<string, GraphSettingsModel> = new Map();

  constructor(private measurementTypeService: MeasurementTypeService, private areaService: AreaService, private storageService: StorageMap, private graphClient: GraphClient,
    private pubsub: PubSubService, private authService: AuthenticationService, private measurementService: MeasurementService) {
    //MAYBE LOAD FROM Local preferences for graph type? 

    this.pubsub.$sub("Measuremet type List Updated").subscribe(result => {
      this.measurementTypeService.MeasurementTypes.forEach(mt =>{
        var gs: GraphSettingsModel = { GraphStyle: 'bar', Visible: true, Measurements: [], Labels: [], InvisibleAreas: []};
        this.TypeSettings.set(mt.id, gs);
      });
    });
    this.storageService.get("SAPPER-Graph-Settings").subscribe((response: SettingSaveModel[]) => this.SetSettings(response));

  }

  private SetSettings(response: SettingSaveModel[]){
    if(response !== undefined){
      var settings = response;
      response.forEach(itm => {
        if(!this.TypeSettings.has(itm.MeasurementTypeId)){
          this.TypeSettings.set(itm.MeasurementTypeId, {GraphStyle: itm.GraphStyle, Visible: itm.Visible, Measurements: [], Labels: [], InvisibleAreas: []})
        }
        this.TypeSettings.get(itm.MeasurementTypeId).GraphStyle = itm.GraphStyle;
        this.TypeSettings.get(itm.MeasurementTypeId).Visible = itm.Visible;   
     
      })

    }
    else{
      var settings: SettingSaveModel[] = [];
      this.TypeSettings.forEach((val, key)=> {
        settings.push({MeasurementTypeId: key, GraphStyle: val.GraphStyle, Visible: val.Visible, InvisibleAreas: []});
      })
      this.storageService.set("SAPPER-Graph-Settings", settings).subscribe(() => {});
    }

  }
  
  public UpdateSettings(measurementTypeId: string, graphStyle: string, visibility: boolean){
    var settings: SettingSaveModel[] = [];
      this.TypeSettings.forEach((val, key)=> {
        if(measurementTypeId === key){
          settings.push({MeasurementTypeId: key, GraphStyle: graphStyle, Visible: visibility, InvisibleAreas: []});
        }
        else{
          settings.push({MeasurementTypeId: key, GraphStyle: val.GraphStyle, Visible: val.Visible, InvisibleAreas: []});
        }
      })
      this.storageService.set("SAPPER-Graph-Settings", settings).subscribe(() => {});
  }

  public GetMeasurements(measurementTypId: string, starting: Date, ending: Date, grouping: string){
   
    if(!this.measurementService.measurements.has(measurementTypId) ||this.measurementService.measurements.get(measurementTypId).length === 0){
      this.pubsub.$sub("Measurements Loaded").subscribe( result => {
        var areaList = this.areaService.Areas;
        var visibleAreas: Array<string> = [];
        areaList.forEach(a =>{
          visibleAreas.push(a.id);
        });
        this.TypeSettings.get(measurementTypId).InvisibleAreas.forEach(n => {
          var pos = 0;
          while(pos < visibleAreas.length){
            if(visibleAreas[pos] === n){
              visibleAreas.splice(pos, 1);
            }
            else{
              pos ++;
            }
          }
        });
        
        var request = new GraphMeasurementRequest({startDate: starting, endDate: ending, measurementTypeId: measurementTypId, groupBy: grouping, areas: visibleAreas});
    
        var gd = this.GenerateDataGroups(request, result.get(request.measurementTypeId));
      this.TypeSettings.get(request.measurementTypeId).Measurements = gd.measurements;
      this.TypeSettings.get(request.measurementTypeId).Labels = gd.labels;
      console.log(gd);
      });
    }
    else{
      var areaList = this.areaService.Areas;
      var visibleAreas: Array<string> = [];
      areaList.forEach(a =>{
        visibleAreas.push(a.id);
      });
      this.TypeSettings.get(measurementTypId).InvisibleAreas.forEach(n => {
        var pos = 0;
        while(pos < visibleAreas.length){
          if(visibleAreas[pos] === n){
            visibleAreas.splice(pos, 1);
          }
          else{
            pos ++;
          }
        }
      });
      
      var request = new GraphMeasurementRequest({startDate: starting, endDate: ending, measurementTypeId: measurementTypId, groupBy: grouping, areas: visibleAreas});
  
      var gd = this.GenerateDataGroups(request, this.measurementService.measurements.get(request.measurementTypeId));
      this.TypeSettings.get(request.measurementTypeId).Measurements = gd.measurements;
      this.TypeSettings.get(request.measurementTypeId).Labels = gd.labels;
      console.log(gd);
    }
  }  
  private GenerateDataGroups(request: GraphMeasurementRequest, measurements: Array<Measurement>): GraphData {
    // var returnData = new GraphData();
    // returnData.labels = [];

    // var areaGraphDataObject = new Map<string, GraphDataObject>();
    // //Fill map with areas and blank arrays
    // request.areas.forEach( id => {
    //   if(!areaGraphDataObject.has(id)){
    //     areaGraphDataObject.set(id, new GraphDataObject({data: new Array<number>(), label: this.areaService.GetAreaNameById(id)}));
    //   }
    // });

    switch(request.groupBy){
      case "Hour":
        return this.ByHour(request, measurements);
      case "Day":
        return this.ByDay(request, measurements);
      case "Week":
        return this.ByWeek(request, measurements);
    }

    // for(var dat of areaGraphDataObject){
    //   returnData.measurements.push(dat[1]);
    // }
    // return returnData;
  }
  private ByHour(request: GraphMeasurementRequest, measurements: Array<Measurement>){
    var returnData = new GraphData();
    returnData.labels = [];

    var areaGraphDataObject = new Map<string, GraphDataObject>();
    //Fill map with areas and blank arrays
    request.areas.forEach( id => {
      if(!areaGraphDataObject.has(id)){
        areaGraphDataObject.set(id, new GraphDataObject({data: new Array<number>(), label: this.areaService.GetAreaNameById(id)}));
      }
    });
    var currentHour = new Date(request.startDate);
    currentHour.setHours(currentHour.getHours(), 0 ,0, 0);
      
      while (currentHour <= request.endDate){
        var prevHour = new Date(currentHour);
        returnData.labels.push(this.formatHourDate(prevHour));

        currentHour.setTime(currentHour.getTime() + (1*60*60*1000));

        var areaMap = new Map<string, number>();
        var endDate = new Date(request.endDate);
        if(currentHour < request.endDate){
          endDate = new Date(currentHour);
        }

        measurements.forEach( m => {
          if(m.dateadded >= prevHour && m.dateadded < endDate){
            if(areaMap.has(m.areaid)){
              areaMap.set(m.areaid, areaMap.get(m.areaid) + m.measurement);
            }
            else{
              areaMap.set(m.areaid, m.measurement);
            }
          }

        });
        //need to make the data that doesn't exist null
        request.areas.forEach(a =>{
          if(!areaMap.has(a)){
            areaMap.set(a, null);
          }
        });

        for(var item of areaMap){
          var gd = areaGraphDataObject.get(item[0]);
          gd.data.push(item[1]);
          areaGraphDataObject.set(item[0], gd);
        }
      }
      for(var dat of areaGraphDataObject){
        returnData.measurements.push(dat[1]);
      }
      return returnData;
  }

  private ByDay(request: GraphMeasurementRequest, measurements: Array<Measurement>){
    var returnData = new GraphData();
    returnData.labels = [];

    var areaGraphDataObject = new Map<string, GraphDataObject>();
    //Fill map with areas and blank arrays
    request.areas.forEach( id => {
      if(!areaGraphDataObject.has(id)){
        areaGraphDataObject.set(id, new GraphDataObject({data: new Array<number>(), label: this.areaService.GetAreaNameById(id)}));
      }
    });
    var currentDay = request.startDate;
      currentDay.setHours(0,0,0,0);
      
      while (currentDay <= request.endDate){
        var prevDay = new Date(currentDay);

        returnData.labels.push(this.formatDayDate(prevDay));
        currentDay.setDate(currentDay.getDate() + 1);

        var areaMap = new Map<string, number>();
        var endDate = new Date(request.endDate);
        if(currentDay < request.endDate){
          endDate = new Date(currentDay);
        }

        measurements.forEach( m => {
          if(m.dateadded > prevDay && m.dateadded <= endDate){
            if(areaMap.has(m.areaid)){
              areaMap.set(m.areaid, areaMap.get(m.areaid) + m.measurement);
            }
            else{
              areaMap.set(m.areaid, m.measurement);
            }
          }

        });
        //need to make the data that doesn't exist null
        request.areas.forEach(a =>{
          if(!areaMap.has(a)){
            areaMap.set(a, null);
          }
        })
        for(var item of areaMap){
          var gd = areaGraphDataObject.get(item[0]);
          gd.data.push(item[1]);
          areaGraphDataObject.set(item[0], gd);
        }
      }
      for(var dat of areaGraphDataObject){
        returnData.measurements.push(dat[1]);
      }
      return returnData;
  }
  private ByWeek(request: GraphMeasurementRequest, measurements: Array<Measurement>){
    var returnData = new GraphData();
    returnData.labels = [];

    var areaGraphDataObject = new Map<string, GraphDataObject>();
    //Fill map with areas and blank arrays
    request.areas.forEach( id => {
      if(!areaGraphDataObject.has(id)){
        areaGraphDataObject.set(id, new GraphDataObject({data: new Array<number>(), label: this.areaService.GetAreaNameById(id)}));
      }
    });
    var currentWeek = request.startDate;
      currentWeek.setHours(0,0,0,0);
      // while(this.getDayOfTheWeek(currentWeek) != "Sunday"){
      //   currentWeek.setDate(-1);
      // }
      // request.endDate.setHours(0,0,0,0);
      // while(this.getDayOfTheWeek(request.endDate) != "Sunday"){
      //   request.endDate.setDate(1);
      // }
      
      // while (currentWeek <= request.endDate){
      //   var prevWeek = new Date(currentWeek);
      //   returnData.labels.push(this.formatWeekDate(prevWeek));
      //   currentWeek.setDate(7);

      //   var areaMap = new Map<string, number>();
      //   var endDate = new Date(request.endDate);
      //   if(currentWeek < request.endDate){
      //     endDate = new Date(currentWeek);
      //   }  

      //   measurements.forEach( m => {
      //     if(m.dateadded >= prevWeek && m.dateadded < endDate){
      //       if(areaMap.has(m.areaid)){
      //         areaMap.set(m.areaid, areaMap.get(m.areaid) + m.measurement);
      //       }
      //       else{
      //         areaMap.set(m.areaid, m.measurement);
      //       }
      //     }

      //   });

      //   for(var item of areaMap){
      //     var gd = areaGraphDataObject.get(item[0]);
      //     gd.data.push(item[1]);
      //     areaGraphDataObject.set(item[0], gd);
      //   }
      // }

    for(var dat of areaGraphDataObject){
      returnData.measurements.push(dat[1]);
    }
    return returnData;
  }
  private formatHourDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ' ' +  ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }
  private formatDayDate(date) {
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
  }
  private formatWeekDate(date: Date) {
    var start = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
    return "Week Starting " + start;
  }
  private formatMonthDate(date) {
    return date.getMonth()+1 + "/" + date.getFullYear();
  }
  private formatYearDate(date) {
    return date.getFullYear();
  }
  private getDayOfTheWeek(date: Date){
    switch(date.getDay()){
      case 0:
        return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
    }
  }
}


export interface SettingSaveModel{
  MeasurementTypeId: string;
  GraphStyle: string;
  Visible: boolean;
  InvisibleAreas: Array<string>;
}

export interface GraphSettingsModel{
  GraphStyle: string;
  Visible: boolean;
  InvisibleAreas: Array<string>;

  Measurements: ChartDataSets[];
  Labels: string[];
}