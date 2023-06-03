import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { Order } from 'src/app/classes/order';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { OrderDataService } from 'src/app/services/order-data.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-place-order',
    templateUrl: './place-order.component.html',
    styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent {
    customer: Customer;
    order: Order;
    vehicleRequest: VehicleRequest;
    orderDetailsForm: any;

    constructor(
        private router: Router,
        private customerDataService: CustomerDataService,
        private formBuilder: FormBuilder,
        private orderDataService: OrderDataService,
        private requestDataService: RequestDataService
    ) {
        this.customer = customerDataService.getCustomer();
        this.order = orderDataService.getOrder();
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    getToday(): string {
        return new Date().toISOString().split('T')[0];
    }

    ngOnInit() {
        this.orderDetailsForm = this.formBuilder.group({
            basePrice: [this.vehicleRequest.totalPrice],
            transportCost: [],
            discount: [],
            totalPrice: [this.vehicleRequest.totalPrice],
            orderDate: [, Validators.required],
            deliveryDate: [, Validators.required],
        });
    }

    updateTotal() {
        let total =
            Number(this.orderDetailsForm.value.basePrice) +
            Number(this.orderDetailsForm.value.transportCost) -
            Number(this.orderDetailsForm.value.discount);

        if (total < 0) total = 0;

        this.orderDetailsForm.patchValue({
            totalPrice: total,
        });
    }

    buildOrder() {
        this.order.vehicleTransaction.requestId =
            this.requestDataService.getVehicleRequest().requestId;
        this.order.vehicleTransaction.customerId =
            this.customerDataService.getCustomer().id;
        this.order.orderDate = this.orderDetailsForm.value.orderDate!;
        this.order.estDeliveryDate = this.orderDetailsForm.value.deliveryDate!;
        this.order.tranportCost = this.orderDetailsForm.value.transportCost!;
        this.order.totalPrice = this.orderDetailsForm.value.totalPrice!;

        this.orderDataService.setOrder(this.order);
        console.log(this.orderDetailsForm.value.orderDate);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['agreement']);
    }
}
