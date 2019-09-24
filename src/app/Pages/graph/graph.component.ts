import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { GraphServiceService } from 'src/app/Services/graph-service.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  public oneArea: boolean = false;
  public MeasurementTypes: Array<string> = [];
  constructor(private route: ActivatedRoute, public measurementTypeService: MeasurementTypeService, public graphService: GraphServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params !== undefined){
        this.oneArea = true;
      }
    });

  }

}
