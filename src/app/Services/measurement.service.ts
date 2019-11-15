import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { CreateClient, UpdateClient, GetClient, Measurement } from './mapster.client';
import { StorageMap } from '@ngx-pwa/local-storage';
import { AreaService } from './area.service';
import { mergeMap } from 'rxjs/operators';
import { PubSubService } from './pub-sub.service';
import { MeasurementTypeService } from './measurement-type.service';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  public measurements: Map<string, Array<Measurement>> = new Map<string, Array<Measurement>>();

  constructor(private authService: AuthenticationService, private createClient: CreateClient, private updateClient: UpdateClient,
    private getClient: GetClient, private storageService: StorageMap, private areaService: AreaService, private pubsub: PubSubService,
    private measurementTypeService: MeasurementTypeService, private toolsService: ToolsService) {

    //this.GetAllMeasurements();
      this.init();
    //this.TestingAll();
  }
  init() {
    this.storageService.get("SAPPER-Measurements").subscribe((measurements: Array<Measurement>) => {
      console.log(measurements)
      if (measurements != undefined) {
        for (var i = 0; i < measurements.length; i++) {
          this.AddOrUpdateMeasurementMap(measurements[i]);
        }
        console.log(this.measurements)
      }
      this.pubsub.$pub("Measurements Loaded", this.measurements);

    })
  }

  public GetByAreaAndMType(areaId: string, measurementTypeId: string) {
    var measurements = new Array<Measurement>();
    if (this.measurements.has(measurementTypeId)) {
      var mtypeMeasurements = this.measurements.get(measurementTypeId);
      for (var i = 0; i < mtypeMeasurements.length; i++) {
        if (mtypeMeasurements[i].areaid == areaId) {
          measurements.push(mtypeMeasurements[i]);
        }
      }
    }

    return measurements;
  }



  public Get(areaId: string, measurementTypeId: string): Observable<Array<Measurement>> {
    if (!this.authService.LoginSkipped && this.authService.isPremium) {
      return this.getClient.measurement(areaId, measurementTypeId);
    }
    else {
      this.storageService.get("SAPPER-Measurements").subscribe((result: Array<Measurement>) => {
        var specifiedMeasurements: Array<Measurement> = [];
        result.forEach(e => {
          if (e.areaid == areaId && e.measurementtypeid == measurementTypeId) {
            specifiedMeasurements.push(e);
          }
        });
        return of(specifiedMeasurements);
      });
    }

  }



  public GetAllByMeasurementType(measurementTypeId: string): Observable<Array<Measurement>> {
    if (!this.authService.LoginSkipped && this.authService.isPremium) {
      //return this.getClient.measurement(1, measurementTypeId);
      return of([]);
    }
    else {
      if (this.areaService.Areas.length === 0) {
        this.pubsub.$sub("Areas Loaded").subscribe(result => {
          var lst: Array<Measurement> = [];
          result.forEach(area => {
            this.Testing(area.id, measurementTypeId).forEach(m => {
              lst.push(m);
            })
          });
          return lst;
        });
      }
      else {
        var lst: Array<Measurement> = [];
        this.areaService.Areas.forEach(area => {
          this.Testing(area.id, measurementTypeId).forEach(m => {
            lst.push(m);
          })
        });
        return of(lst);
      }

      //return of(lst);
      // this.storageService.get("SAPPER-Measurements").subscribe((result: Array<Measurement>) => {
      //   var specifiedMeasurements: Array<Measurement> = [];
      //   if(result === undefined){
      //     //return [];

      //   }
      //   else {
      //     return of([]);
      //   }
      //   // result.forEach(e => {
      //   //   if( e.measurementtypeid == measurementTypeId){
      //   //     specifiedMeasurements.push(e);
      //   //   }
      //   // });
      //   // return of(specifiedMeasurements);
      // });
    }
  }
  TestingAll() {
    if (this.areaService.Areas.length === 0) {
      this.pubsub.$sub("Areas Loaded").subscribe(result => {
        if (this.measurementTypeService.MeasurementTypes.length === 0) {
          this.pubsub.$sub("Measuremet type List Updated").subscribe(result => {
            this.LoadMeasurments(result);
          });
        }
        else {
          this.LoadMeasurments(this.areaService.Areas);
        }

      });
    }
    else {
      if (this.measurementTypeService.MeasurementTypes.length === 0) {
        this.pubsub.$sub("Measuremet type List Updated").subscribe(result => {
          this.LoadMeasurments(this.areaService.Areas);
        });
      }
      else {
        this.LoadMeasurments(this.areaService.Areas);
      }
    }
  }

  LoadMeasurments(areas: any) {
    this.measurementTypeService.MeasurementTypes.forEach(mt => {
      var lst: Array<Measurement> = [];

      areas.forEach(area => {
        var meas = this.Testing(area.id, mt.id);

        meas.forEach(m => {
          lst.push(m);
        })
      });

      this.measurements.set(mt.id, lst);
    });
    this.pubsub.$pub("Measurements Loaded", this.measurements);
  }

  Testing(areaId: string, measurementTypeId: string) {
    var lst: Array<Measurement> = [];

    var pos = 0;
    while (pos < 3) {
      var d = new Date();
      d.setHours((-1 * pos));
      lst.push(new Measurement({
        id: areaId + (pos + 1).toString(),
        areaid: areaId,
        measurementtypeid: measurementTypeId,
        dateadded: d,
        measurement: pos
      }));
      pos++;
    }
    return lst;
  }

  public Add(areaId: string, measurementTypeId: string, value: string) {
    var newMeasurement = new Measurement({
      id: this.toolsService.uuidv4(),
      areaid: areaId,
      measurementtypeid: measurementTypeId,
      dateadded: new Date(),
      measurement: Number.parseFloat(value)
    });

    this.storageService.get("SAPPER-Measurements").subscribe((result: Array<Measurement>) => {
      var measurements = new Array<Measurement>();

      if (result != undefined) {
        result.push(newMeasurement);
        measurements = result;
      }
      else {
        measurements.push(newMeasurement);
      }

      this.storageService.set("SAPPER-Measurements", measurements).subscribe();

      this.AddOrUpdateMeasurementMap(newMeasurement);
      this.pubsub.$pub("Measurement Added", newMeasurement);
    })
  }


  public AddOrUpdateMeasurementMap(measurement: Measurement) {
    console.log(measurement)
    if (this.measurements.has(measurement.measurementtypeid)) {
      var measurementArray = this.measurements.get(measurement.measurementtypeid);
      measurementArray.push(measurement);
      this.measurements.set(measurement.measurementtypeid, measurementArray);
    }
    else {
      var measurementArray: Array<Measurement> = [];
      measurementArray.push(measurement);
      this.measurements.set(measurement.measurementtypeid, measurementArray);
    }
    console.log(this.measurements)
  }
}