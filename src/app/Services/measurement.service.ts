import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { ConnectionService } from './connection.service';
import { Measurement, GetClient, Client } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private connectionService: ConnectionService, private client: Client) { }

  public Get(areaId: string, measurementTypeId: string) {
    return this.client.measurement(measurementTypeId,areaId);
  }

  Testing(areaId: string, measurementTypeId: string) {
  }

  public Add(areaId: string, measurementTypeId: string, value: number): Measurement {
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
    return this.connectionService.AddMeasurement(new Measurement({
      id: null,
      areaid: areaId,
      measurementtypeid: measurementTypeId,
      dateadded: new Date(),
      measurement: value
    }));
  }
}
