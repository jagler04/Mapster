import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';
import { Area, User, Point, Location, Client } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Array<Area> = [];
  constructor(public pubsub: PubSubService, private backendClient: Client) {
  }

  getAreas(){
    this.backendClient.getAll().subscribe(x => {
      console.log(x);
      this.Areas = x;
    })
  }

  public CreateNewArea(path: Array<LatLngLiteral>, areaName: string) {

    let newAreaDB = new Area({
      areaname: areaName,
      points: []
    })
    var pos = 0;
    while (pos < path.length) {
      newAreaDB.points.push(new Point({
        position: pos,
        loc: new Location({
          lat: path[pos].lat,
          longitude: path[pos].lng
        })
      }));
      pos++;
    }
    //NEED TO PUSH TO DB
    this.Areas.push(newAreaDB);
    this.backendClient.create(newAreaDB).subscribe(x => {
      this.pubsub.$pub("Areas Updates", this.Areas);
      console.log(x);
      console.log('creation complete!');
    });
  }
  public UpdateAreaName(area: Area, newName: string) {
    var area = this.Areas.find(a => { if (a.id === area.id) return true; });
    area.areaname = newName;
  }
}
