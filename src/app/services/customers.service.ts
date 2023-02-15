import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';
import { CustomerSearch } from '../classes/customer-search';

@Injectable({
    providedIn: 'root',
})
export class CustomersService {
    constructor(private http: HttpClient) {}

    BASE_URL: string = 'http://localhost:8090';

    getCustomers() {
        return this.http.get(`${this.BASE_URL}/customers`);
    }

    saveCustomer(customer: Customer) {
        return this.http.post(`${this.BASE_URL}/customers`, customer);
    }

    searchCustomer(customerToSearch: CustomerSearch) {
        return this.http.post(`${this.BASE_URL}/customers/search`, customerToSearch)
    }
}
