import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from 'src/app/Services/tools.service';
import { MeasurementService } from 'src/app/Services/measurement.service';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { AreaService } from 'src/app/Services/area.service';
import { Area, MeasurementType, Measurement } from 'src/app/Services/mapster.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private toolsService: ToolsService, public authService: AuthenticationService, private nav: NavigationService, private route: ActivatedRoute,
    private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService, private areaService: AreaService
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params)
    // });
    // if(this.authService.LoginSkipped){
    //   this.nav.Push("areas");
    // }
    this.loadServices();
  }

  loadServices() {
    this.areaService.init().subscribe((result: Area[]) => {
      this.areaService.Areas = result;
      this.measurementTypeService.init().subscribe((result: Array<MeasurementType>) => {
        if (result != undefined) {
          this.measurementTypeService.MeasurementTypes = result
        }
        this.measurementService.init();
      })
    })
  }

  login() {
    console.log(this.measurementService.measurements)
  }

  checkAuth() {
    //this.authService.IsAuthenticated = true;
    this.authService.ContinueWithNoLogin();
    this.nav.Push("areas");
  }

  register() {
    this.nav.Push("registration")
  }


}
