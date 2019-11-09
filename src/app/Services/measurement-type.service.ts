import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { CreateClient, MeasurementType, UpdateClient, GetClient } from './mapster.client';
import { ToolsService } from './tools.service';
import { AuthenticationService } from './authentication.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService {

  public MeasurementTypes: Array<MeasurementType> = [];
  constructor(private storageService: StorageMap, private authService: AuthenticationService, private toolsService: ToolsService, private pubsub: PubSubService, private createClient: CreateClient, private updateClient: UpdateClient, private getClient: GetClient) {
    // this.GetMeasurementTypes();
  }

  init() {
    return this.storageService.get('SAPPER-MeasurementTypes');
  }

  GetMeasurementTypes() {
    this.storageService.get('SAPPER-MeasurementTypes').subscribe((result: Array<MeasurementType>) => {
      //console.log(result);
      this.MeasurementTypes = result
      this.pubsub.$pub("Measuremet type List Updated");
    })
  }
  CreateMeasurementType(newMeasurementType: MeasurementType) {
    newMeasurementType.id = this.toolsService.uuidv4();
    this.MeasurementTypes.push(newMeasurementType);
    this.storageService.set('SAPPER-MeasurementTypes', this.MeasurementTypes).subscribe(result => {
      this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
    })
  }
  UpdateMeasurementType(updatedMeasurementType: MeasurementType) {
    if (this.authService.LoginSkipped) {
      var index = this.MeasurementTypes.findIndex(m => m.id == updatedMeasurementType.id);
      this.MeasurementTypes[index] = updatedMeasurementType;
      this.storageService.set('SAPPER-MeasurementTypes', this.MeasurementTypes).subscribe(result => {
        //console.log(result)
        this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
      })
    }
    else {
      this.updateClient.measurementType(updatedMeasurementType).subscribe(result => {
        var index = this.MeasurementTypes.findIndex(m => m.id == updatedMeasurementType.id);
        this.MeasurementTypes[index] = updatedMeasurementType;
        this.pubsub.$pub("MeasurementTypes Updated", this.MeasurementTypes);
      });
    }
  }
  Get(measurementTypeId: string): MeasurementType {
    return this.MeasurementTypes.find(m => m.id == measurementTypeId);
  }


}

