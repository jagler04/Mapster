import { Component, OnInit } from '@angular/core';
import { MeasurementTypeService, MeasurementTypeModel } from 'src/app/Services/measurement-type.service';
import { MeasurementService, MeasurementModel } from 'src/app/Services/measurement.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EntryDialogComponent } from 'src/app/Popups/entry-dialog/entry-dialog.component';

@Component({
  selector: 'area-measurements',
  templateUrl: './area-measurements.component.html',
  styleUrls: ['./area-measurements.component.scss']
})
export class AreaMeasurementsComponent implements OnInit {
  areaId: string;
  measurementTypes: Array<MeasurementTypeExtended> = [];
  constructor(private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService, 
    private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params !== undefined){
        this.areaId = params["id"];
      }
    });
    this.measurementTypeService.MeasurementTypes.forEach(mt =>{
      this.measurementTypes.push({
        id: mt.id,
        measurementName: mt.measurementName,
        units: mt.units,
        isOpen: false,
        entries: []
      });
    })
  }
  ShowAdd(mt: MeasurementTypeExtended){
    var dialogRef = this.dialog.open(EntryDialogComponent, {data: { Text: "Enter " + mt.measurementName}});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        var newEntry = this.measurementService.Add(this.areaId, mt.id, result);
        var measurementType = this.measurementTypes.find(m => m.id === newEntry.measurementTypeId );
            if (measurementType !== undefined && (measurementType.isOpen || measurementType.entries.length > 0)){
              measurementType.entries.unshift({
                id: newEntry.id,
                areaId: this.areaId,
                measurementTypeId: newEntry.measurementTypeId, 
                dateAdded: Date.now(),
                measurement: newEntry.measurement
              });
            }
        //var addedRef = this.measurementService.Add(this.areaId, mt.id, result);

        // addedRef.subscribe(result => {
        //   if (result != null){
        //     var measurementType = this.measurementTypes.find(m => m.id == result.measurementTypeId);
        //     if (measurementType !== undefined){
        //       measurementType.entries.push({
        //         id: result.id,
        //         areaId: this.areaId,
        //         measurementTypeId: result.measurementTypeId, 
        //         dateAdded: Date.now(),
        //         measurement: result.measurement
        //       });
        //     }
           }
        //})
      // }
    });
  }

  ShowHideMeasurements(mt: MeasurementTypeExtended){
    mt.isOpen = !mt.isOpen;
    if(mt.isOpen && mt.entries.length === 0){
      mt.entries = this.measurementService.Get(this.areaId, mt.id);
    }
  }
}
export interface MeasurementTypeExtended extends MeasurementTypeModel{
  isOpen: boolean;
  entries: Array<MeasurementModel>;
}
