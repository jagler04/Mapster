import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MeasurementModel } from './measurement.service';
import { CordovaService } from './cordova.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private cordova: CordovaService) {
    
  }

  public AddMeasurement(newMeasurement: MeasurementModel): MeasurementModel {
    newMeasurement.id = "TETSDS";

    if(this.cordova.cordova !== undefined && this.cordova.cordova.device.platform === "Android" 
      || this.cordova.cordova.device.platform === "iOS"){

      console.log(this.cordova.cordova.device.platform);
    }
    else{
      //GO DIRECTLY TO THE WEB SERVICE SKIP TRYING TO USE LOCAL DB
    }
    return newMeasurement;

  }
}
