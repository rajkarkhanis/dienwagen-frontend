import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
    constructor(private customersService: CustomersService) {}

    customers: any;

    ngOnInit() {
        this.fetchCustomers();
    }

    fetchCustomers() {
        this.customersService.getCustomers().subscribe((res) => {
            this.customers = res;
        });
    }
}
