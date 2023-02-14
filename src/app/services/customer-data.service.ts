import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../classes/customer';

@Injectable({
    providedIn: 'root',
})
export class CustomerDataService {
    private customer: Customer = new Customer();
    customerSubject: Subject<Customer> = new Subject<Customer>();

    constructor() {}

    getCustomer(): Customer {
        return this.customer;
    }

    setCustomer(newCustomer: Customer) {
        this.customer = newCustomer;
        this.customerSubject.next(this.customer);
    }
}
