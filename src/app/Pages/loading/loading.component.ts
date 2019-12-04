import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AreaService } from 'src/app/Services/area.service';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { MeasurementService } from 'src/app/Services/measurement.service';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  private areasLoaded = false;
  private measurementTypesLoaded = false;
  private measurementsLoaded = false;
  //@ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('videoPlayer',{static: true}) videoplayer: ElementRef;

  constructor(private areaService: AreaService, private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService,
    private pubSub: PubSubService, private navigationService: NavigationService) { }

  ngOnInit() {
    if(!this.areaService.AreasLoaded){
      //this.areaService.getAreas();
      this.pubSub.$sub("Areas Loaded").subscribe(result => {
        this.areasLoaded = true;
        this.Navigate();
      });
    }
    else{
      this.areasLoaded = true;
    }

    if (!this.measurementTypeService.MeasurementTypesLoaded){
      //this.measurementTypeService.GetMeasurementTypes();
      this.pubSub.$sub("MeasurementTypes Updated").subscribe(result => {
          this.measurementTypesLoaded = true;
          this.Navigate();
      });
    }
    else{
      this.measurementTypesLoaded = true;
    }

    if(!this.measurementService.MeasurementsLoaded){
      //this.measurementService.init();
      this.pubSub.$sub("Measurements Loaded").subscribe(result => {
        this.measurementsLoaded = true;
        this.Navigate();
      });
    }
    else{
      this.measurementsLoaded = true;
    }
    this.Navigate();
  }


toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}

  private Navigate(){
    if(this.areasLoaded && this.measurementTypesLoaded && this.measurementsLoaded){
      this.navigationService.GoNext();
    }
  }
}
