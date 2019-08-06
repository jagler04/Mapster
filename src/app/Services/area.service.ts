import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';
import { Area, User, Points, Location, Client } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Array<AreaModel> = [];
  constructor(public pubsub: PubSubService, private backendClient: Client) {
    this.Testing();
  }

  Testing() {
    var pos = 0;
    while (pos < 20) {
      this.Areas.push({
        id: (pos + 1).toString(),
        AreaName: "Area " + pos,
        Points: [
          { Position: 0, Latitude: 41.037705631717294, Longitude: -81.47310225399781 },
          { Position: 1, Latitude: 41.03051908036947, Longitude: -81.47267310055543 },
          { Position: 2, Latitude: 41.030713321802, Longitude: -81.46336047085572 }
        ]
      })
      pos++;
    }
  }

  public CreateNewArea(path: Array<LatLngLiteral>, areaName: string) {
    var newArea = {
      id: (this.Areas.length + 1).toString(),
      AreaName: areaName,
      Points: []
    };
    var pos = 0;
    while (pos < path.length) {
      newArea.Points.push({
        Position: pos,
        Longitude: path[pos].lng,
        Latitude: path[pos].lat
      });
      pos++;
    }

    let newAreaDB = new Area({
      areaname: areaName,
      points: [],
      owner: "5d432f621c9d666b6473ffec"
    })
    var pos = 0;
    while (pos < path.length) {
      newAreaDB.points.push(new Points({
        position: pos,
        loc: new Location({
          lat: path[pos].lat,
          longitude: path[pos].lng
        })
      }));
      pos++;
    }
    //NEED TO PUSH TO DB
    this.Areas.push(newArea);
    this.backendClient.area(newAreaDB).subscribe(x => {
      console.log(x);
      console.log('creation complete!');
    });
    this.pubsub.$pub("Areas Updates", this.Areas);
  }
  public UpdateAreaName(area: AreaModel, newName: string) {
    var area = this.Areas.find(a => { if (a.id === area.id) return true; });
    area.AreaName = newName;
  }
}

export interface AreaModel {
  id: string,
  AreaName: string;
  Points: Array<AreaPoint>;
}
export interface AreaPoint {
  Position: number;
  Longitude: number;
  Latitude: number;
}
