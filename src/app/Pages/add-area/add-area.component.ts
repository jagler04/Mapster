import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, LatLngLiteral } from '@agm/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { MatDialog } from '@angular/material';
import { EntryDialogComponent } from 'src/app/Popups/entry-dialog/entry-dialog.component';
import { AreaService } from 'src/app/Services/area.service';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { tileLayer, latLng, marker, polygon } from 'leaflet';
//import { } from '@types/googlemaps';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent implements OnInit {

  // @ViewChild('gmap', { static: true })
  // gmapElement: any;

  @ViewChild('search', { static: true })
  public searchElementRef: ElementRef;

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 15;
  private geoCoder;

  drawing: boolean = false;
  public drawnOverlay: any;
  hasPolygon: boolean = false;
  areaName: string = "";

  options: any = null;
  layers: any = [];
  markerLayers: any = [];
  markers: any = [];
  polygonLayer: any = polygon(this.markers);

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private pubsub: PubSubService,
    private nav: NavigationService, public dialog: MatDialog, private areaService: AreaService,
    private measurementTypeService: MeasurementTypeService) { }

  ngOnInit() {
    this.pubsub.$pub("Add Area Page Active");

    this.setCurrentLocation();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });


    });

  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;

        this.options = {
          layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' })
          ],
          zoom: this.zoom,
          center: latLng(this.latitude, this.longitude)
        };
      });
    }
  }

  StartDraw() {
    this.drawing = true;
    if (this.paths.length > 0) {
      this.paths.forEach(p => {
        this.markers.push({
          lat: p.lat,
          lng: p.lng,
          draggable: true
        })
      });
      this.paths = [];
    }
  }

  CancelDraw() {
    this.drawing = false;
    this.markers = [];
    this.markerLayers = [];
  }
  private dialogRef;
  SaveDraw() {
    this.paths = [];
    for (var i = 0; i < this.markers.length; i++) {
      var location = this.markers[i];
      this.paths.push({
        lat: location[0],
        lng: location[1]
      });
    }
    this.markers = [];
    this.drawing = false;
    this.dialogRef = this.dialog.open(EntryDialogComponent, {
      data: { Text: "Enter an area name" }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.areaName = result;
        this.FinalizeArea();
      }
    });
  }
  FinalizeArea() {

    this.areaService.CreateNewArea(this.paths, this.areaName);
    if (this.measurementTypeService.MeasurementTypes.length > 0) {
      this.GoBack();
    }
    else {
      this.pubsub.$pub("Add Area Page Deactivated");
      this.nav.Push("addMeasurementTypes");
    }
  }
  GoBack() {
    this.pubsub.$pub("Add Area Page Deactivated");
    this.nav.Push("areas");
  }

  paths: Array<LatLngLiteral> = [];
  mapClicked($event: any) {
    console.log($event)

    if (this.drawing) {
      this.markerLayers.push(marker([$event.latlng.lat, $event.latlng.lng]))
      this.markers.push([$event.latlng.lat, $event.latlng.lng])
      console.log(this.markerLayers)
      console.log(this.markers)
      this.polygonLayer = polygon(this.markers);

      // this.markers.push({
      //   lat: $event.coords.lat,
      //   lng: $event.coords.lng,
      //   draggable: true
      // });
    }
  }
  markerDragEnd(i: number, $event: any) {
    console.log("Marker: " + i + " updated");
    this.markers[i] = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    };

  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
