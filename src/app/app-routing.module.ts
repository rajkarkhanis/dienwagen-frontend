import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './components/agreement/agreement.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OfferComponent } from './components/offer/offer.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { VehicleEquipmentComponent } from './components/vehicle-equipment/vehicle-equipment.component';
import { VehicleModelComponent } from './components/vehicle-model/vehicle-model.component';
import { VehiclePaintComponent } from './components/vehicle-paint/vehicle-paint.component';

const routes: Routes = [
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'order-placed', component: OrderPlacedComponent },
    { path: 'confirm-order', component: ConfirmOrderComponent },
    { path: 'agreement', component: AgreementComponent },
    { path: 'order', component: OrderComponent },
    { path: 'offer', component: OfferComponent },
    { path: 'equipment', component: VehicleEquipmentComponent },
    { path: 'paint', component: VehiclePaintComponent },
    { path: 'vehicle', component: VehicleModelComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
