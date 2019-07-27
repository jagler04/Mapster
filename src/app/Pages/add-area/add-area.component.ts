import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
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

  // map: google.maps.Map;

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 15;
  private geoCoder;

  drawing: boolean = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private pubsub: PubSubService) { }

  ngOnInit() {
    this.pubsub.$pub("Add Area Page Active");
    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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
  }
  CancelDraw(){
    this.drawing = false;
  }
  SaveDraw(){

  }
}
