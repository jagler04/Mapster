import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMeasurementsComponent } from './area-measurements.component';

describe('AreaMeasurementsComponent', () => {
  let component: AreaMeasurementsComponent;
  let fixture: ComponentFixture<AreaMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
