import { Injectable } from '@angular/core';
import { CordovaService } from './cordova.service';
import { Measurement } from './mapster.client';
declare var device;
declare var navigator;

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private cordova: CordovaService) {

  }

  public hasInternet() {
    console.log(navigator);
  }

  public AddMeasurement(newMeasurement: Measurement): Measurement {
    return null;
    // newMeasurement.id = "TETSDS";

    // if(this.cordova.cordova !== undefined && this.cordova.cordova.device.platform === "Android" 
    //   || this.cordova.cordova.device.platform === "iOS"){

    //   console.log(this.cordova.cordova.device.platform);
    // }
    // else{
    //   //GO DIRECTLY TO THE WEB SERVICE SKIP TRYING TO USE LOCAL DB
    // }
    // return newMeasurement;

  }
}
