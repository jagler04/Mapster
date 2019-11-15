import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AreaService } from './area.service';
import { MeasurementTypeService } from './measurement-type.service';
import { MeasurementService } from './measurement.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public CurrentPage: string;

  private nextPage = "";
  private nextParam = "";
  constructor(private pubsub: PubSubService, private router: Router, private authService: AuthenticationService, private areaService: AreaService,
    private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService) {
    //this.router.events.subscribe(this.RouterEvents);
  }

  public Push(page: string, param: string = null) {
    if(!this.areaService.AreasLoaded || !this.measurementTypeService.MeasurementTypesLoaded
      || !this.measurementService.MeasurementsLoaded){
        this.nextPage = page;
        this.nextParam = param;
        this.router.navigateByUrl("/loading");
    }
    else{
      this.CurrentPage = page.replace(/([A-Z])/g, ' $1').trim();
      console.log("page pushed: " + page);
  
      if (param !== null) {
        this.router.navigate(["/" + page, param])
      }
      else {
        this.router.navigateByUrl("/" + page);
      }
    }
    

  }

  public GoNext(){
    if(this.nextPage !== ""){
      if (this.nextParam !== null) {
        this.router.navigate(["/" + this.nextPage, this.nextParam])
      }
      else {
        this.router.navigateByUrl("/" + this.nextPage);
      }
    }
    else{
      //LOAD THE DEFAULT HOME PAGE
      this.router.navigateByUrl("/home");
    }
  }
}
