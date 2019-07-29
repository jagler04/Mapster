import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, LatLngLiteral } from '@agm/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { NavigationService } from 'src/app/Services/navigation.service';
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

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private pubsub: PubSubService,
    private nav: NavigationService) { }

  ngOnInit() {
    this.pubsub.$pub("Add Area Page Active");

    this.setCurrentLocation();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

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
      });
    }
  }

  StartDraw() {
    this.drawing = true;
    if(this.paths.length > 0){
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

  CancelDraw(){
    this.drawing = false;
    this.markers = [];
  }
  SaveDraw(){
    this.paths = [];
    this.markers.forEach(m =>{
      this.paths.push({
        lat: m.lat,
        lng: m.lng
      });
    });
    this.markers = [];
    this.drawing = false;
  }
  GoBack() {
    this.pubsub.$pub("Add Area Page Deactivated");
    this.nav.Push("Areas");
  }
  
  markers: marker[] = [];
  paths: Array<LatLngLiteral> = [];
  mapClicked($event: any) {
    if(this.drawing){
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
      });
    }
  }
  markerDragEnd(i: number, $event: any) {
    console.log("Marker: " + i + " updated");
    this.markers[i] =  {
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
