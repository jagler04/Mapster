import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MeasurementType } from 'src/app/Services/mapster.client';

@Component({
  selector: 'add-edit-measurement-type',
  templateUrl: './add-edit-measurement-type-dialog.component.html',
  styleUrls: ['./add-edit-measurement-type-dialog.component.scss']
})
export class AddEditMeasurementTypeDialogComponent implements OnInit {

  newMeasurementType: MeasurementType = new MeasurementType();
  passedMeasurementType: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddEditMeasurementTypeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: MeasurementType) {
    if(data !== undefined && data !== null){
      console.log(data)
      this.newMeasurementType = data;
      this.passedMeasurementType =true;
    }
    else{
      this.newMeasurementType = new MeasurementType()
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
