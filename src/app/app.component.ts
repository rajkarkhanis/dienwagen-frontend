import { Component } from '@angular/core';
import { Auth } from './classes/auth';
import { Customer } from './classes/customer';
import { VehicleRequest } from './classes/vehicle-request';
import { AuthDataService } from './services/auth-data.service';
import { CustomerDataService } from './services/customer-data.service';
import { RequestDataService } from './services/request-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'dienwagen-frontend';

    vehicleRequest: VehicleRequest | undefined;
    customer: Customer | undefined;

    constructor(
        private requestDataService: RequestDataService,
        private customerDataService: CustomerDataService,
    ) {
        this.requestDataService.vehicleRequestSubject.subscribe((request) => {
            this.vehicleRequest = request;
        });

        this.customerDataService.customerSubject.subscribe(
            (customer) => (this.customer = customer)
        );
    }
}
