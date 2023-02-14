import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { VehicleModelComponent } from './components/vehicle-model/vehicle-model.component';
import { VehiclePaintComponent } from './components/vehicle-paint/vehicle-paint.component';
import { VehicleEquipmentComponent } from './components/vehicle-equipment/vehicle-equipment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './components/offer/offer.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        SearchCustomerComponent,
        AddCustomerComponent,
        HomeComponent,
        VehicleModelComponent,
        VehiclePaintComponent,
        VehicleEquipmentComponent,
        NavbarComponent,
        OrderComponent,
        PlaceOrderComponent,
        SearchOrderComponent,
        AgreementComponent,
        ConfirmOrderComponent,
        OrderPlacedComponent,
        OrderStatusComponent,
        OfferComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
