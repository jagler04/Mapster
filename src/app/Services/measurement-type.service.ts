import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { CreateClient, MeasurementType, UpdateClient, GetClient } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {

  public MeasurementTypes: Array<MeasurementType> = [];
  constructor(private pubsub: PubSubService, private createClient: CreateClient, private updateClient: UpdateClient, private getClient: GetClient) {
    this.GetMeasurementTypes()
  }

  Testing() {
    //  var pos = 0;
    //  while (pos < 20){
    //   this.MeasurementTypes.push({
    //     id: (pos + 1).toString(),
    //     measurementName: "Name " + pos,
    //     units: "Units " + pos
    //   });
    //   pos ++;
    //  }
  }
  GetMeasurementTypes() {
    this.getClient.measurementTypes().subscribe(result => {
      this.MeasurementTypes = result;
    })
  }
  CreateMeasurementType(newMeasurementType: MeasurementType) {
    this.createClient.measurementType(newMeasurementType).subscribe(result => {
      console.log(result)
      this.MeasurementTypes.push(newMeasurementType);
      this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
    })

  }
  UpdateMeasurementType(updatedMeasurementType: MeasurementType) {
    this.updateClient.measurementType(updatedMeasurementType).subscribe(result => {
      var index = this.MeasurementTypes.findIndex(m => m.id == updatedMeasurementType.id);
      this.MeasurementTypes[index] = updatedMeasurementType;
      this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
    });

  }
}

