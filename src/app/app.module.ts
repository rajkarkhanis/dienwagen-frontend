import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
