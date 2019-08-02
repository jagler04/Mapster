import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/Services/navigation.service';
import { AreaService, AreaModel } from 'src/app/Services/area.service';
import { MatDialog } from '@angular/material';
import { EntryDialogComponent } from 'src/app/Popups/entry-dialog/entry-dialog.component';
import { SelectionDialogComponent } from 'src/app/Popups/selection-dialog/selection-dialog.component';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  constructor(private nav: NavigationService, private areaService: AreaService, private dialog: MatDialog) { }

  ngOnInit() {
  }
  GoToAdd(){
    this.nav.Push("AddArea");
  }
  ShowEdit(area: AreaModel){
    var name = area.AreaName;
    var dialogRef = this.dialog.open(EntryDialogComponent, 
      {data: {Text: "Update Area Name", Value: name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.areaService.UpdateAreaName(area, result);
      }
    });
  }

  ShowSelect(area: AreaModel){
    var dialogRef = this.dialog.open(SelectionDialogComponent, { data:{
      Header: area.AreaName,
      Selections: ["View Map","Add Measurement","Edit Area Name"]
    }});

    dialogRef.afterClosed().subscribe(result =>{
      if(result !== undefined){
        switch(result){
          case("View Map"):

            break;
          case("Add Measurement"):

            break;
          case("Edit Area Name"):
            this.ShowEdit(area);
            break;
        }
      }
    });
  }
}
