import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graph-control',
  templateUrl: './graph-control.component.html',
  styleUrls: ['./graph-control.component.scss']
})
export class GraphControlComponent implements OnInit {
  private measurementType: string;
  @Input()
  public set MeasurementType(value: string){
    this.measurementType = value;
  }
  public get MeasurementType() : string {
    return this.measurementType;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
