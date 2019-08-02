import { Component, OnInit, Inject } from '@angular/core';
import { MeasurementTypeModel } from 'src/app/Services/measurement-type.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'add-edit-measurement-type',
  templateUrl: './add-edit-measurement-type-dialog.component.html',
  styleUrls: ['./add-edit-measurement-type-dialog.component.scss']
})
export class AddEditMeasurementTypeDialogComponent implements OnInit {

  newMeasurementType: MeasurementTypeModel = {id: "", measurementName: "", units: ""};
  passedMeasurementType: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddEditMeasurementTypeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: MeasurementTypeModel) {
    if(data !== undefined && data !== null){
      this.newMeasurementType = data;
      this.passedMeasurementType =true;
    }
    else{
      this.newMeasurementType = {id: "", measurementName: "", units: ""};
    }
    
   }

  ngOnInit() {
  }
  Cancel(){
    this.dialogRef.close();
  }

  Save(){
    this.dialogRef.close(this.newMeasurementType);
  }
}
