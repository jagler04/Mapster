import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MeasurementTypeService, MeasurementTypeModel } from 'src/app/Services/measurement-type.service';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { AddEditMeasurementTypeDialogComponent } from 'src/app/Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component';

@Component({
  selector: 'measurement-types',
  templateUrl: './measurement-types.component.html',
  styleUrls: ['./measurement-types.component.scss']
})
export class MeasurementTypesComponent implements OnInit {

  constructor(private dialog: MatDialog, public measurementTypeService: MeasurementTypeService, private pubsub: PubSubService) { }

  ngOnInit() {
  }

  ShowAdd(){
    var dialogRef = this.dialog.open(AddEditMeasurementTypeDialogComponent);

    dialogRef.afterClosed().subscribe((result: MeasurementTypeModel) => {
      if(result !== undefined){
        this.measurementTypeService.CreateMeasurementType(result);
      }
    });
  }
  ShowEdit(mt: MeasurementTypeModel){
    //Decouple the measurement type from the reference or it would cause the element to be modified
    var nmt = {id: mt.id, measurementName: mt.measurementName, units: mt.units};
    var dialogRef = this.dialog.open(AddEditMeasurementTypeDialogComponent, {data: nmt});

    dialogRef.afterClosed().subscribe((result: MeasurementTypeModel) => {
      if(result !== undefined){
        this.measurementTypeService.UpdateMeasurementType(result);
      }
    });
  }
}
