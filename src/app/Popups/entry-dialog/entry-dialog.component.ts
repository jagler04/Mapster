import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  Text: string;
}

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  Text: string;
  entryValue: string;
  constructor(public dialogRef: MatDialogRef<EntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.Text = data.Text;
     }

  ngOnInit() {
  }

  Cancel(): void {
    this.dialogRef.close();
  }
  Save(){
    this.dialogRef.close(this.entryValue);
  }
}
