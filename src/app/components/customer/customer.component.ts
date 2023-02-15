import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
    constructor(
        private customersService: CustomersService,
        private customerDataService: CustomerDataService,
        private router: Router
    ) {}

    customers: any;
    selectedCustomer: Customer = new Customer();

    fetchCustomers(foundCustomers: any) {
        this.customers = foundCustomers
    }

    selectCustomer(index: number) {
        // get customer selected
        this.selectedCustomer = this.customers[index];
        this.customerDataService.setCustomer(this.selectedCustomer);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['offer']);
    }
}
