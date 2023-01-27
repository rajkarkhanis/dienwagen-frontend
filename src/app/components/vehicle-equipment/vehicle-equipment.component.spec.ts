import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEquipmentComponent } from './vehicle-equipment.component';

describe('VehicleEquipmentComponent', () => {
  let component: VehicleEquipmentComponent;
  let fixture: ComponentFixture<VehicleEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
