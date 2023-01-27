import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLineComponent } from './vehicle-line.component';

describe('VehicleLineComponent', () => {
  let component: VehicleLineComponent;
  let fixture: ComponentFixture<VehicleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
