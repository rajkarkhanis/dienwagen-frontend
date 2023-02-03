import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { VehicleModelComponent } from './components/vehicle-model/vehicle-model.component';
import { VehicleLineComponent } from './components/vehicle-line/vehicle-line.component';
import { VehiclePaintComponent } from './components/vehicle-paint/vehicle-paint.component';
import { VehicleEquipmentComponent } from './components/vehicle-equipment/vehicle-equipment.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchCustomerComponent,
    AddCustomerComponent,
    HomeComponent,
    VehicleModelComponent,
    VehicleLineComponent,
    VehiclePaintComponent,
    VehicleEquipmentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
