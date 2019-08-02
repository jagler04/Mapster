import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/Services/area.service';
import { LatLngLiteral, MapsAPILoader } from '@agm/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'area-map',
  templateUrl: './area-map.component.html',
  styleUrls: ['./area-map.component.scss']
})
export class AreaMapComponent implements OnInit {

  paths: Array<LatLngLiteral> = [];
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 15;

  constructor(private areaService: AreaService, private route: ActivatedRoute, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params !== undefined){
        var id = params["id"];
        var area = this.areaService.Areas.find(a => { if(a.id === params["id"]) return true; });
        if(area !== undefined){
          var maxLat = area.Points[0].Latitude;
          var minLat = area.Points[0].Latitude;
          var maxLon = area.Points[0].Longitude;
          var minLon = area.Points[0].Longitude;
          var points: Array<LatLngLiteral> = [];
          area.Points.forEach(p => {
            if(maxLat < p.Latitude){
              maxLat = p.Latitude;
            }
            if(minLat > p.Latitude){
              minLat = p.Latitude;
            }
            if(maxLon < p.Longitude){
              maxLon = p.Longitude;
            }
            if(minLon > p.Longitude){
              minLon = p.Longitude;
            }
            points.push({
              lat: p.Latitude,
              lng: p.Longitude
            })
          });
          console.log(points);
          this.latitude = maxLat - ((maxLat - minLat) / 2);
          this.longitude = maxLon - ((maxLon - minLon) / 2);
          console.log("Latitude: " + this.latitude + " Longitude: " + this.longitude);
          this.paths = points;
        }

      }
      
    })
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
