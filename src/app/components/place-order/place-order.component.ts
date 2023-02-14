import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';

@Component({
    selector: 'app-place-order',
    templateUrl: './place-order.component.html',
    styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent {
    customer: Customer;

    constructor(
        private router: Router,
        private customerDataService: CustomerDataService
    ) {
        this.customer = customerDataService.getCustomer();
    }

    showAgreement() {
        this.router.navigate(['/agreement']);
    }
}
