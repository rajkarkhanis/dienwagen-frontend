import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/classes/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
    constructor(
        private fb: FormBuilder,
        private customersService: CustomersService
    ) {}

    customer: Customer = new Customer();

    addCustomerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [
            '',
            Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
            ]),
        ],
        email: [
            '',
            Validators.compose([
                Validators.required,
                Validators.pattern('/^[^s@]+@[^s@]+.[^s@]+$/'),
            ]),
        ],
        address: ['', Validators.required],
    });

    ngOnChanges() {
        console.log(this.addCustomerForm.status);
    }

    sendRequest() {
        this.customersService
            .saveCustomer(this.customer)
            .subscribe((res) => console.log(res));
    }

    addCustomer() {
        this.customer.firstName = this.addCustomerForm.value.firstName!;
        this.customer.lastName = this.addCustomerForm.value.lastName!;
        this.customer.phone = this.addCustomerForm.value.phone!;
        this.customer.email = this.addCustomerForm.value.email!;
        this.customer.address = this.addCustomerForm.value.address!;
        this.sendRequest()
    }
}
