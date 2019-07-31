import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {

  public MeasurementTypes: Array<MeasurementTypeModel> = [];
  constructor() { }
}
export interface MeasurementTypeModel{
  MeasurementName: string;
  Units: string;
}
