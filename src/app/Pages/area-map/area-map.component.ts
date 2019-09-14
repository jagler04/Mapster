import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/Services/area.service';
import { LatLngLiteral, MapsAPILoader } from '@agm/core';
import { ActivatedRoute } from '@angular/router';
import { tileLayer, latLng, polygon } from 'leaflet';

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
  options: any = {};
  layers: any = [];
  constructor(public areaService: AreaService, private route: ActivatedRoute, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params !== undefined) {
        var id = params["id"];
        var area = this.areaService.Areas.find(a => { if (a.id === params["id"]) return true; });
        if (area !== undefined) {
          var maxLat = area.points[0].loc.latitude
          var minLat = area.points[0].loc.latitude;
          var maxLon = area.points[0].loc.longitude;
          var minLon = area.points[0].loc.longitude;
          var points: Array<LatLngLiteral> = [];
          area.points.forEach(p => {
            if (maxLat < p.loc.latitude) {
              maxLat = p.loc.latitude;
            }
            if (minLat > p.loc.latitude) {
              minLat = p.loc.latitude;
            }
            if (maxLon < p.loc.longitude) {
              maxLon = p.loc.longitude;
            }
            if (minLon > p.loc.longitude) {
              minLon = p.loc.longitude;
            }
            points.push({
              lat: p.loc.latitude,
              lng: p.loc.longitude
            })
          });
          console.log(points);
          this.latitude = maxLat - ((maxLat - minLat) / 2);
          this.longitude = maxLon - ((maxLon - minLon) / 2);
          console.log("Latitude: " + this.latitude + " Longitude: " + this.longitude);
          this.paths = points;
          this.options = {
            layers: [
              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: this.zoom,
            // center: latLng(41.1955783/1859713, -81.45993527354125)
            center: latLng(this.latitude, this.longitude)
          };

          this.layers = [polygon(points),]

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
