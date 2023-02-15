import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerSearch } from 'src/app/classes/customer-search';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
    selector: 'app-search-customer',
    templateUrl: './search-customer.component.html',
    styleUrls: ['./search-customer.component.css'],
})
export class SearchCustomerComponent {
    constructor(
        private formBuilder: FormBuilder,
        private customersService: CustomersService
    ) {}

    customerToSearch: CustomerSearch = new CustomerSearch();
    customers: any;
    @Output() customersFetchedEvent = new EventEmitter<any>();

    searchCustomerForm = this.formBuilder.group({
        firstName: [],
        lastName: [],
        customerId: [],
    });

    buildCustomer() {
        this.customerToSearch.customerId =
            this.searchCustomerForm.value.customerId!;
        this.customerToSearch.firstName =
            this.searchCustomerForm.value.firstName!;
        this.customerToSearch.lastName =
            this.searchCustomerForm.value.lastName!;
    }

    searchCustomer() {
        this.buildCustomer();
        this.customersService
            .searchCustomer(this.customerToSearch)
            .subscribe((res) => {
                this.customers = res;
                this.customersFetchedEvent.emit(this.customers);
            });
    }
}
