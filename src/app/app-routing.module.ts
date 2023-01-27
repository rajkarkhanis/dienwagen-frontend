import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { VehicleEquipmentComponent } from './components/vehicle-equipment/vehicle-equipment.component';
import { VehicleLineComponent } from './components/vehicle-line/vehicle-line.component';
import { VehicleModelComponent } from './components/vehicle-model/vehicle-model.component';
import { VehiclePaintComponent } from './components/vehicle-paint/vehicle-paint.component';

const routes: Routes = [
    { path: 'equipment', component: VehicleEquipmentComponent },
    { path: 'paint', component: VehiclePaintComponent },
    { path: 'line', component: VehicleLineComponent },
    { path: 'model', component: VehicleModelComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
