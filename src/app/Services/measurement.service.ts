import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private connectionService: ConnectionService) { }

  public Get(areaId: string, measurementTypeId: string): Array<MeasurementModel>{
    var lst: Array<MeasurementModel> = this.Testing(areaId, measurementTypeId);

    return lst;
  }

  Testing(areaId: string, measurementTypeId: string){
    var lst: Array<MeasurementModel> = [];

    var pos = 0;
    while(pos < 20){
      lst.push({
        id: (pos + 1).toString(),
        areaId: areaId,
        measurementTypeId: measurementTypeId,
        dateAdded: Date.now(),
        measurement: pos.toString()
      });
      pos ++;
    }
    return lst;
  }

  public Add(areaId: string, measurementTypeId: string, value: string): MeasurementModel{
    // var connectionRef = this.connectionService.AddMeasurement({
    //   id: null,
    //   areaId: areaId,
    //   measurementTypeId: measurementTypeId, 
    //   dateAdded: Date.now(),
    //   measurement: value
    // });
    // connectionRef.subscribe(result => {
    //   return result;
    // })
    //return  of<MeasurementModel | null>(<any>null);
    return this.connectionService.AddMeasurement({
      id: null,
      areaId: areaId,
      measurementTypeId: measurementTypeId, 
      dateAdded: Date.now(),
      measurement: value
    });
  }
}
export interface MeasurementModel {
  id: string;
  areaId: string;
  measurementTypeId: string;
  dateAdded: number;
  measurement: string;
}
