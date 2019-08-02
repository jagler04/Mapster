import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementTypesComponent } from './measurement-types.component';

describe('AddMeasurementTypesComponent', () => {
  let component: AddMeasurementTypesComponent;
  let fixture: ComponentFixture<AddMeasurementTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeasurementTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasurementTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
