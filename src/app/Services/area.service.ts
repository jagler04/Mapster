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
        Points: [
          {Position: 0, Latitude: 41.037705631717294, Longitude: -81.47310225399781},
          {Position: 1, Latitude: 41.03051908036947, Longitude: -81.47267310055543},
          {Position: 2, Latitude: 41.030713321802, Longitude: -81.46336047085572}
        ]
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
    var area = this.Areas.find(a => {if(a.id === area.id) return true;});
    area.AreaName = newName;
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