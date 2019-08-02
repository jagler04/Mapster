import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData{
  Header: string;
  Selections: Array<string>;
}

@Component({
  selector: 'app-selection-dialog',
  templateUrl: './selection-dialog.component.html',
  styleUrls: ['./selection-dialog.component.scss']
})
export class SelectionDialogComponent implements OnInit {
  header: string;
  selections: Array<string>;
  constructor(public dialogRef: MatDialogRef<SelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.header = data.Header
      this.selections = data.Selections;
     }

  ngOnInit() {
  }
  Select(selection){
    this.dialogRef.close(selection);
  }

}
