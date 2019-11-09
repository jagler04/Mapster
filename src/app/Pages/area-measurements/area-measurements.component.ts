import { Component, OnInit } from '@angular/core';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { MeasurementService } from 'src/app/Services/measurement.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EntryDialogComponent } from 'src/app/Popups/entry-dialog/entry-dialog.component';
import { MeasurementType, Measurement } from 'src/app/Services/mapster.client';
import { PubSubService } from 'src/app/Services/pub-sub.service';

@Component({
  selector: 'app-area-measurements',
  templateUrl: './area-measurements.component.html',
  styleUrls: ['./area-measurements.component.scss']
})

export class AreaMeasurementsComponent implements OnInit {
  areaId: string;
  measurementTypes: Array<MeasurementTypeExtended> = [];
  constructor(private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService,
    private route: ActivatedRoute, private dialog: MatDialog, private pubsub: PubSubService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params !== undefined) {
        this.areaId = params["id"];
      }
    });
    this.measurementTypeService.MeasurementTypes.forEach(mt => {
      let newMType = new MeasurementTypeExtended({
        id: mt.id,
        measurementname: mt.measurementname,
        units: mt.units
      });
      newMType.isOpen = false;
      newMType.entries = [];

      this.measurementTypes.push(newMType);
    })

    this.pubsub.$sub("Measurement Added").subscribe(result => {
      var measurementType = this.measurementTypes.find(m => m.id === result.measurementtypeid);
        if (measurementType !== undefined && (measurementType.isOpen || measurementType.entries.length > 0)) {
          measurementType.entries.unshift(new Measurement({
            id: result.id,
            areaid: this.areaId,
            measurementtypeid: result.measurementtypeid,
            dateadded: result.dateadded,
            measurement: result.measurement
          }));
        }
    });
    // this.measurementTypeService.GetMeasurementTypes();
    // this.pubsub.$sub("Measuremet type List Updated").subscribe(result => {
    //   this.measurementTypes = [];
    //   
    //   });
    // });

    // console.log(this.measurementTypeService.MeasurementTypes);
    // console.log(this.measurementTypes);
  }
  ShowAdd(mt: MeasurementTypeExtended) {
    var dialogRef = this.dialog.open(EntryDialogComponent, { data: { Text: "Enter " + mt.measurementname } });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.measurementService.Add(this.areaId, mt.id, result);
      }
    });
  }

  ShowHideMeasurements(mt: MeasurementTypeExtended) {
    mt.isOpen = !mt.isOpen;
    if (mt.isOpen && mt.entries.length === 0) {
      var measurements = this.measurementService.GetByAreaAndMType(this.areaId, mt.id);
      console.log(measurements)
      mt.entries = measurements;
    }
  }
}
export class MeasurementTypeExtended extends MeasurementType {
  isOpen: boolean;
  entries: Array<Measurement>;
}
