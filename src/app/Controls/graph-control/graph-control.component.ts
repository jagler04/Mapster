import { Component, OnInit, Input } from '@angular/core';
import { GraphServiceService } from 'src/app/Services/graph-service.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';

@Component({
  selector: 'graph-control',
  templateUrl: './graph-control.component.html',
  styleUrls: ['./graph-control.component.scss']
})
export class GraphControlComponent implements OnInit {
  private measurementTypeId: string;
  @Input()
  public set MeasurementTypeId(value: string){
    this.measurementTypeId = value;    
  }
  public get MeasurementTypeId() : string {
    return this.measurementTypeId;
  }

  private startDate: Date;
  @Input()
  public set StartDate(value: Date){
    this.startDate = value;
  }
  public get StartDate(): Date {
    return this.startDate;
  }

  private endDate: Date;
  @Input()
  public set EndDate(value: Date){
    this.endDate = value;
  }
  public get EndDate(): Date {
    return this.endDate;
  }

  private groupBy: string;
  @Input()
  public set GroupBy(value: string){
    this.groupBy = value;
  }
  public get GroupBy(){
    return this.groupBy;
  }
  
  public MeasurementName: string;

  public barChartData: ChartDataSets[] = [];
  public barChartLabels: string[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };;
  public barChartLegend: boolean = true;
  //public barChartType = 'bar';


  constructor(public graphService: GraphServiceService, private measurementTypeService: MeasurementTypeService) { }

  ngOnInit() {
    this.MeasurementName = this.measurementTypeService.Get(this.measurementTypeId).measurementname;

    this.graphService.GetMeasurements(this.measurementTypeId, this.startDate, this.endDate, this.groupBy);
  }

}
