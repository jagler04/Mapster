import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
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
  drawnPolygon: google.maps.Polygon;
  drawnOverlay: any;
  map: google.maps.Map;
  hasPolygon: boolean = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private pubsub: PubSubService,
    private nav: NavigationService) { }

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

  drawingManager: google.maps.drawing.DrawingManager;
  StartDraw() {
    this.drawing = true;
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      },
      polygonOptions: {
        strokeColor: '#5DAA68',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        editable: true,
        clickable: true
      }
    });
    drawingManager.setMap(this.map);
    this.drawingManager = drawingManager;
    var googleMap = this.map;
    //google.maps.event.addListener(drawingManager, "polygoncomplete", this.PolygonComplete);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', this.OverlayComplete);
  }
  PolygonComplete(poly: google.maps.Polygon){
    if(!this.hasPolygon){
      this.hasPolygon = true;
    }
    this.drawnPolygon = poly;
  }
  OverlayComplete(event: google.maps.drawing.OverlayCompleteEvent) {
    if(event.type === google.maps.drawing.OverlayType.POLYGON){
      this.drawnOverlay = event.overlay;
    }
  }
  CancelDraw(){
    this.drawing = false;
    this.hasPolygon = false;
    if(this.drawnOverlay !== undefined){
      this.drawnOverlay.setMap(null);
      this.drawnOverlay = undefined;
      this.drawnPolygon = undefined;
    }
    this.drawingManager.setMap(null);
    // if(this.drawnPolygon !== undefined){
    //   this.drawnPolygon.setMap(null);
    //   this.drawnPolygon.setEditable(false);
    //   this.drawnPolygon = undefined;
    // }
    //this.drawingManager.
  }
  SaveDraw(){

  }
  GoBack() {
    this.pubsub.$pub("Add Area Page Deactivated");
    this.nav.Push("Areas");
  }
  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    this.map = map;
    
  }
}
