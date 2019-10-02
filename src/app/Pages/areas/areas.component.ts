import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/Services/navigation.service';
import { AreaService } from 'src/app/Services/area.service';
import { Area, User, Point, Location, Client } from 'src/app/Services/mapster.client';

import { MatDialog } from '@angular/material';
import { EntryDialogComponent } from 'src/app/Popups/entry-dialog/entry-dialog.component';
import { SelectionDialogComponent } from 'src/app/Popups/selection-dialog/selection-dialog.component';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  constructor(private nav: NavigationService, public areaService: AreaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.areaService.getAreas();
  }
  GoToAdd() {
    console.log(this.nav)
    this.nav.Push("addArea");
  }
  ShowEdit(area: Area) {
    var name = area.areaname;
    var dialogRef = this.dialog.open(EntryDialogComponent,
      {
        data: { Text: "Update Area Name", Value: name }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.areaService.UpdateAreaName(area, result);
      }
    });
  }

  ShowSelect(area: Area) {
    var dialogRef = this.dialog.open(SelectionDialogComponent, {
      data: {
        Header: area.areaname,
        Selections: ["View Map", "Add Measurement", "Edit Area Name"]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log("User selected: " + result);
        switch (result) {
          case ("View Map"):
            console.log(area.id)
            this.nav.Push("areaMap", area.id);
            break;
          case ("Add Measurement"):
            this.nav.Push("areaMeasurements", area.id);
            break;
          case ("Edit Area Name"):
            this.ShowEdit(area);
            break;
        }
      }
    });
  }
}
