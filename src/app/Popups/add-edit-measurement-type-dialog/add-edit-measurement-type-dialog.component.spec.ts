import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMeasurementTypeDialogComponent } from './add-edit-measurement-type-dialog.component';

describe('AddMeasurementTypeComponent', () => {
  let component: AddEditMeasurementTypeDialogComponent;
  let fixture: ComponentFixture<AddEditMeasurementTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMeasurementTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMeasurementTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
