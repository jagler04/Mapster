import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor() { }

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
        measurment: pos.toString()
      });
      pos ++;
    }
    return lst;
  }
}
export interface MeasurementModel {
  id: string;
  areaId: string;
  measurementTypeId: string;
  dateAdded: number;
  measurment: string;
}
