import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {

  public MeasurementTypes: Array<MeasurementTypeModel> = [];
  constructor(private pubsub: PubSubService) {
    this.Testing();
   }

   Testing(){
     var pos = 0;
     while (pos < 20){
      this.MeasurementTypes.push({
        id: (pos + 1).toString(),
        measurementName: "Name " + pos,
        units: "Units " + pos
      });
      pos ++;
     }
   }
  CreateMeasurementType(newMeasurementType: MeasurementTypeModel){
    newMeasurementType.id = (this.MeasurementTypes.length + 1).toString();
    this.MeasurementTypes.push(newMeasurementType);

    this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
  }
  UpdateMeasurementType(updatedMeasurementType: MeasurementTypeModel){
    var index = this.MeasurementTypes.findIndex(m => m.id == updatedMeasurementType.id);
    this.MeasurementTypes[index] = updatedMeasurementType;

    this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
  }
}
export interface MeasurementTypeModel{
  id: string;
  measurementName: string;
  units: string;
}
