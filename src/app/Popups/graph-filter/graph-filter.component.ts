import { Component, OnInit, ViewChildren, ElementRef, QueryList, Inject } from '@angular/core';
//import * as M from "materialize-css/dist/js/materialize";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-graph-filter',
  templateUrl: './graph-filter.component.html',
  styleUrls: ['./graph-filter.component.scss']
})
export class GraphFilterComponent implements OnInit {

  @ViewChildren('datepicker') datePickers: QueryList<ElementRef>;
  public GroupBy: string;
  public StartDate: Date = new Date();
  public EndDate: Date = new Date();
  public HourSettings = {
    bigBanner: true,
    timePicker: true,
    format: 'MM/dd/yyyy hh:mm a',
    defaultOpen: false
  }
  public Settings = {
    bigBanner: false,
    timePicker: false,
    format: 'MM/dd/yyyy',
    defaultOpen: false
  }

  public Groupings = [
    "Hour",
    "Day",
    "Week",
    "Month",
    "Year"
  ];
  constructor(private dialogRef: MatDialogRef<GraphFilterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.StartDate = data.StartDate;
    this.EndDate = data.EndDate;
    this.GroupBy = data.GroupBy;
   }

  ngOnInit() {
  }

  public Filter(){
    console.log(this.StartDate);
    this.dialogRef.close({
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      GroupBy: this.GroupBy
    });
  }
  // ngAfterViewInit() {
  //   const pickers = this.datePickers.toArray();
  //   pickers.forEach((picker) => M.Datepicker.init(picker, {}));
  // }
}
