import { Injectable } from '@angular/core';
import { MeasurementTypeService } from './measurement-type.service';
import { MeasurementService } from './measurement.service';
import { ChartDataSets } from 'chart.js';
import { StorageMap } from '@ngx-pwa/local-storage';
import { GraphClient, GraphMeasurementRequest } from './mapster.client';
import { AreaService } from './area.service';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  public TypeSettings: Map<string, GraphSettingsModel> = new Map();

  constructor(private measurementTypeService: MeasurementTypeService, private areaService: AreaService, private storageService: StorageMap, private graphClient: GraphClient) {
    //MAYBE LOAD FROM Local preferences for graph type? 
    this.measurementTypeService.MeasurementTypes.forEach(mt =>{
      var gs: GraphSettingsModel = { GraphStyle: 'bar', Visible: true, Measurements: [], Labels: [], InvisibleAreas: []};
      this.TypeSettings.set(mt.id, gs);
    });
    this.storageService.get("SAPPER-Graph-Settings").subscribe((response: SettingSaveModel[]) => this.SetSettings(response));
  }

  private SetSettings(response: SettingSaveModel[]){
    if(response !== undefined){
      var settings = response;
      response.forEach(itm => {
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
    var areaList = this.areaService.Areas;
    var visibleAreas: Array<string> = [];
    this.TypeSettings.get(measurementTypId).InvisibleAreas.forEach(n => {
      areaList.forEach(a => {
        if(a.id !== n){
          visibleAreas.push(n);          
        }
      })
    })
    return this.graphClient.measurements(new GraphMeasurementRequest({startDate: starting, endDate: ending, measurementTypeId: measurementTypId, groupBy: grouping, areas: visibleAreas}));
    // this.TypeSettings.get(measurementTypeId).Measurements = [{data: [21,32,21,66], label:"Area 1"}, {data: [22,31,21,63], label:"Area 2"},
    // {data: [22,31,21,63], label:"Area 3"}, {data: [22,31,21,63], label:"Area 4"}, {data: [22,31,21,63], label:"Area 5"}, {data: [22,31,21,63], label:"Area 6"}];
    // this.TypeSettings.get(measurementTypeId).Labels = ["9/17/2019", "9/18/2019", "9/19/2019", "9/20/2019"];

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