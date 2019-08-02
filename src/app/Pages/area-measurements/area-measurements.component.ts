import { Component, OnInit } from '@angular/core';
import { MeasurementTypeService, MeasurementTypeModel } from 'src/app/Services/measurement-type.service';
import { MeasurementService, MeasurementModel } from 'src/app/Services/measurement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'area-measurements',
  templateUrl: './area-measurements.component.html',
  styleUrls: ['./area-measurements.component.scss']
})
export class AreaMeasurementsComponent implements OnInit {
  areaId: string;
  measurementTypes: Array<MeasurementTypeExtended> = [];
  constructor(private measurementTypeService: MeasurementTypeService, private measurementService: MeasurementService, 
    private route: ActivatedRoute) { }

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
