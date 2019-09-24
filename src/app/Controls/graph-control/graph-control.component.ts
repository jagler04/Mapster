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
    this.MeasurementName = this.measurementTypeService.Get(this.measurementTypeId).measurementName;
    //console.log("MeasurementType: " + this.MeasurementType);
    //console.log(this.graphService.TypeSettings);
    var graphItem = this.graphService.TypeSettings.get(this.MeasurementTypeId);
    //console.log(graphItem);

    this.graphService.GetMeasurements(this.measurementTypeId, 1, 1, "DAY");
    this.barChartData = this.graphService.TypeSettings.get(this.MeasurementTypeId).Measurements;
    this.barChartLabels = this.graphService.TypeSettings.get(this.MeasurementTypeId).Labels;

    //console.log(graphItem);
  }

}
