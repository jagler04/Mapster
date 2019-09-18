import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { AddEditMeasurementTypeDialogComponent } from 'src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component';
import { MeasurementType } from 'src/app/Services/mapster.client';

@Component({
  selector: 'measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.scss']
})
export class MeasurementTypesComponent implements OnInit {

  constructor(private dialog: MatDialog, public measurementTypeService: MeasurementTypeService, private pubsub: PubSubService) { }

  ngOnInit() {
  }

  ShowAdd() {
    var dialogRef = this.dialog.open(AddEditMeasurementTypeDialogComponent);

    dialogRef.afterClosed().subscribe((result: MeasurementType) => {
      if (result !== undefined) {
        this.measurementTypeService.CreateMeasurementType(result);
      }
    });
  }
  ShowEdit(mt: MeasurementType) {
    //Decouple the measurement type from the reference or it would cause the element to be modified
    var nmt = { id: mt.id, measurementname: mt.measurementname, units: mt.units, owner: mt.owner };
    var dialogRef = this.dialog.open(AddEditMeasurementTypeDialogComponent, { data: nmt });

    dialogRef.afterClosed().subscribe((result: MeasurementType) => {
      if (result !== undefined) {
        this.measurementTypeService.UpdateMeasurementType(result);
      }
    });
  }
}
