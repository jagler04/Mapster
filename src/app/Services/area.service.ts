import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';
import { Area, User, Point, Location, GetClient, UpdateClient, CreateClient } from './mapster.client';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Array<Area> = [];
  constructor(public pubsub: PubSubService, private getClient: GetClient, private updateClient: UpdateClient, private createClient: CreateClient) {
  }

  getAreas() {
    this.getClient.areas().subscribe(x => {
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
          latitude: path[pos].lat,
          longitude: path[pos].lng
        })
      }));
      pos++;
    }
    this.Areas.push(newAreaDB);
    this.createClient.area(newAreaDB).subscribe(x => {
      this.pubsub.$pub("Areas Updates", this.Areas);
      console.log(x);
      console.log('creation complete!');
    });
  }

  public UpdateAreaName(area: Area, newName: string) {
    area.areaname = newName;
    this.updateClient.area(area).subscribe(x => {
      console.log(x);
      console.log('update complete!')
    })
  }
}
