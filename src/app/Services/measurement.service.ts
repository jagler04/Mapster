import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { CreateClient, UpdateClient, GetClient, Measurement } from './mapster.client';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private authService: AuthenticationService, private createClient:CreateClient, private updateClient: UpdateClient,
    private getClient: GetClient, private storageService: StorageMap) { }

  public Get(areaId: string, measurementTypeId: string): Observable<Array<Measurement>>{
    if(!this.authService.LoginSkipped && this.authService.isPremium){
      return this.getClient.measurement(areaId, measurementTypeId);
    }
    else{
      this.storageService.get("SAPPER-Measurements").subscribe((result: Array<Measurement>) => {
        var specifiedMeasurements: Array<Measurement> = [];
        result.forEach(e => {
          if(e.areaid == areaId && e.measurementtypeid == measurementTypeId){
            specifiedMeasurements.push(e);
          }
        });
        return of(specifiedMeasurements);
      });
    }

  }
  public GetAllByMeasurementType(measurementTypeId: string): Observable<Array<Measurement>> {
    if(!this.authService.LoginSkipped && this.authService.isPremium){
      //return this.getClient.measurement(1, measurementTypeId);
      return of();
    }
    else{
      this.storageService.get("SAPPER-Measurements").subscribe((result: Array<Measurement>) => {
        var specifiedMeasurements: Array<Measurement> = [];
        result.forEach(e => {
          if( e.measurementtypeid == measurementTypeId){
            specifiedMeasurements.push(e);
          }
        });
        return of(specifiedMeasurements);
      });
    }
  }

  Testing(areaId: string, measurementTypeId: string){
    var lst: Array<Measurement> = [];

    var pos = 0;
    while(pos < 20){
      lst.push(new Measurement({
        id: (pos + 1).toString(),
        areaid: areaId,
        measurementtypeid: measurementTypeId,
        dateadded: new Date(),
        measurement: pos
      }));
      pos ++;
    }
    return lst;
  }

  public Add(areaId: string, measurementTypeId: string, value: string): Observable<Measurement>{
    this.storageService.get("SAPPER-Measurements-Queue").subscribe((result: Array<Measurement>) => {
      result.push(new Measurement({
        id: null,
        areaid: areaId,
        measurementtypeid: measurementTypeId, 
        dateadded: new Date(),
        measurement: Number.parseFloat(value)
      }));
      this.storageService.set("SAPPER-Measurements-Queue", result).subscribe(result => {

      });
    })

    if(!this.authService.LoginSkipped){
      var addMeasurement = this.createClient.measurement(new Measurement({
        id: null,
        areaid: areaId,
        measurementtypeid: measurementTypeId, 
        dateadded: new Date(),
        measurement: Number.parseFloat(value)
      }));
      addMeasurement.subscribe(result =>{

      }, error => {});
      return addMeasurement;
    }

  }
}
// export interface MeasurementModel {
//   id: string;
//   areaId: string;
//   measurementTypeId: string;
//   dateAdded: number;
//   measurement: string;
// }
