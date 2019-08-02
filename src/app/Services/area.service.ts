import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Array<AreaModel> = [];
  constructor(public pubsub: PubSubService) {
    this.Testing();
   }

   Testing(){
     var pos = 0;
     while (pos < 20){
       this.Areas.push( {
         id: (pos + 1).toString(),
        AreaName: "Area " + pos,
        Points: []
      })
      pos ++;
     }
   }
  public CreateNewArea(path: Array<LatLngLiteral>, areaName: string){
    var newArea = {
      id: (this.Areas.length + 1).toString(),
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
  public UpdateAreaName(area: AreaModel, newName: string){
    var index = this.Areas.findIndex(a => a.id === area.id);
    this.Areas[index].AreaName = newName;
  }
}

export interface AreaModel{
  id: string,
  AreaName: string;
  Points: Array<AreaPoint>;
}
export interface AreaPoint{
  Position: number;
  Longitude: number;
  Latitude: number;
}
