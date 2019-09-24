import { Injectable } from '@angular/core';
import { MeasurementTypeService } from './measurement-type.service';
import { MeasurementService } from './measurement.service';
import { ChartDataSets } from 'chart.js';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  public TypeSettings: Map<string, GraphSettingsModel> = new Map();

  constructor(private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService, private storageService: StorageMap) {
    //MAYBE LOAD FROM Local preferences for graph type? 
    this.measurementTypeService.MeasurementTypes.forEach(mt =>{
      var gs: GraphSettingsModel = { GraphStyle: 'bar', Visible: true, Measurements: [], Labels: []};
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
        settings.push({MeasurementTypeId: key, GraphStyle: val.GraphStyle, Visible: val.Visible});
      })
      this.storageService.set("SAPPER-Graph-Settings", settings).subscribe(() => {});
    }

  }
  
  public UpdateSettings(measurementTypeId: string, graphStyle: string, visibility: boolean){
    var settings: SettingSaveModel[] = [];
      this.TypeSettings.forEach((val, key)=> {
        if(measurementTypeId === key){
          settings.push({MeasurementTypeId: key, GraphStyle: graphStyle, Visible: visibility});
        }
        else{
          settings.push({MeasurementTypeId: key, GraphStyle: val.GraphStyle, Visible: val.Visible});
        }
      })
      this.storageService.set("SAPPER-Graph-Settings", settings).subscribe(() => {});
  }

  public GetMeasurements(measurementTypeId: string, startDate: number, EndDate: number, groupBy: string){
    this.TypeSettings.get(measurementTypeId).Measurements = [{data: [21,32,21,66], label:"Area 1"}, {data: [22,31,21,63], label:"Area 2"},
    {data: [22,31,21,63], label:"Area 3"}, {data: [22,31,21,63], label:"Area 4"}, {data: [22,31,21,63], label:"Area 5"}, {data: [22,31,21,63], label:"Area 6"}];
    this.TypeSettings.get(measurementTypeId).Labels = ["9/17/2019", "9/18/2019", "9/19/2019", "9/20/2019"];

  }
  
}

export interface SettingSaveModel{
  MeasurementTypeId: string;
  GraphStyle: string;
  Visible: boolean;
}

export interface GraphSettingsModel{
  GraphStyle: string;
  Visible: boolean;

  Measurements: ChartDataSets[];
  Labels: string[];
}