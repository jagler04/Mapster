import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasurementTypeService } from 'src/app/Services/measurement-type.service';
import { GraphServiceService } from 'src/app/Services/graph-service.service';
import { AreaService } from 'src/app/Services/area.service';
import { MeasurementService } from 'src/app/Services/measurement.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { MatDialog } from '@angular/material';
import { GraphFilterComponent } from 'src/app/Popups/graph-filter/graph-filter.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  public oneArea: boolean = false;
  public MeasurementTypes: Array<string> = [];
  public CanLoad: boolean = false;
  public GroupBy: string;
  public StartDate: Date = new Date();
  public EndDate: Date = new Date();

  constructor(private route: ActivatedRoute, public measurementTypeService: MeasurementTypeService, public graphService: GraphServiceService,
     private navigationService: NavigationService, private storageService: StorageMap, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params !== undefined){
        this.oneArea = true;
      }
      if(!this.graphService.GetTypeSettings()){
          this.navigationService.Push("graphs", params === undefined ? "" : params["id"]);
      }
      else{
        this.storageService.get<GraphFilter>("SAPPER-Graph-Filter").subscribe((result: GraphFilter) => {
          if(result === undefined){
           this.ShowFilter(false);
          }
          else{
            this.StartDate = result.StartDate;
            this.EndDate = result.EndDate;
            this.GroupBy = result.GroupBy;
            this.CanLoad = true;
          }
        });
      }
    });
  }
  private ShowFilter(allowClose: boolean){
    var dialogRef = this.dialog.open(GraphFilterComponent,
      {
        data: {
          StartDate: this.StartDate,
          EndDate: this.EndDate,
          GroupBy: this.GroupBy
        },
        height: '90%',
        disableClose: !allowClose
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.storageService.set("SAPPER-Graph-Filter", result).subscribe(result =>{});
        this.StartDate = result.StartDate;
        this.EndDate = result.EndDate;
        this.GroupBy = result.GroupBy;
        this.CanLoad = true;
      }
    });
  }

}
export interface GraphFilter {
  StartDate: Date;
  EndDate: Date;
  GroupBy: string;
}
