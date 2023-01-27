import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePaintComponent } from './vehicle-paint.component';

describe('VehiclePaintComponent', () => {
  let component: VehiclePaintComponent;
  let fixture: ComponentFixture<VehiclePaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
