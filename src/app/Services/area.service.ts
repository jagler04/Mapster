import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { PubSubService } from './pub-sub.service';
import { Area, User, Point, Location, GetClient, UpdateClient, CreateClient } from './mapster.client';
import { AuthenticationService } from './authentication.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ToolsService } from './tools.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  public Areas: Area[] = [];
  constructor(private toolsService: ToolsService, public pubsub: PubSubService, private getClient: GetClient, private updateClient: UpdateClient, private createClient: CreateClient,
    private authService: AuthenticationService, private storageService: StorageMap) {
  }

  getAreas(): Observable<Array<Area>> {

    if (this.authService.LoginSkipped || !this.authService.isPremium) {
      this.storageService.get('SAPPER-Areas').subscribe((result: Area[]) => {
        this.Areas = result
        return of(result);
      })
    }
    else {
      var obGetAreas = this.getClient.areas();
      obGetAreas.subscribe(x => {
        this.Areas = x;
        return x;
      });
      return obGetAreas;
    }
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
    if(this.Areas === undefined){
      this.Areas = [];
    }
    if (this.authService.LoginSkipped || !this.authService.isPremium) {

      newAreaDB.id = this.toolsService.uuidv4();
      this.Areas.push(newAreaDB);

      this.storageService.set('SAPPER-Areas', this.Areas).subscribe(result => {
        this.pubsub.$pub("Areas Updates", this.Areas);
        console.log('creation complete!');
      })
    }
    else {
      this.Areas.push(newAreaDB);
      this.createClient.area(newAreaDB).subscribe(x => {
        this.Areas.push(x);
        this.pubsub.$pub("Areas Updates", this.Areas);
        console.log('creation complete!');
      });
    }
  }

  public UpdateAreaName(area: Area, newName: string) {
    area.areaname = newName;
    if (this.authService.LoginSkipped) {
      this.storageService.set('SAPPER-Areas', this.Areas).subscribe(result => { console.log('update complete!') })
    }
    else {
      this.updateClient.area(area).subscribe(x => {
        console.log('update complete!')
      })
    }
  }
  public GetAreaNameById(id: string){
    if(this.Areas.length === 0){
      this.getAreas().subscribe(result => {
        result.forEach(a =>{
          if(a.id === id){
            return a.areaname
          }
        })
      });
    }
    else{
      this.Areas.forEach(a =>{
        if(a.id === id){
          return a.areaname
        }
      })
    }
    return "";
  }
}
