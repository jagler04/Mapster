import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Array<AreaModel> = [];
  constructor(public pubsub: PubSubService) { }

  public CreateNewArea(path: Array<LatLngLiteral>, areaName: string){
    var newArea = {
      AreaName: areaName,
      Points: []
    };
    var pos = 0;
    while(pos < path.length){
      newArea.Points.push({
        Position: pos,
        Longitude: path[pos].lng,
        Latitude: path[pos].lat
      });
      pos ++;
    }
    //NEED TO PUSH TO DB
    this.Areas.push(newArea);
    this.pubsub.$pub("Areas Updates", this.Areas);
  }
}

export interface AreaModel{
  AreaName: string;
  Points: Array<AreaPoint>;
}
export interface AreaPoint{
  Position: number;
  Longitude: number;
  Latitude: number;
}
