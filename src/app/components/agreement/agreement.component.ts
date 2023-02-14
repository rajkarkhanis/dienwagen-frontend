import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-agreement',
    templateUrl: './agreement.component.html',
    styleUrls: ['./agreement.component.css'],
})
export class AgreementComponent {
    customer: Customer;
    vehicleRequest: VehicleRequest;

    constructor(
        private router: Router,
        private customerDataService: CustomerDataService,
        private requestDataService: RequestDataService
    ) {
        this.customer = customerDataService.getCustomer()
        this.vehicleRequest = requestDataService.getVehicleRequest()
    }

    printAgreement() {
        // TODO: create & call function to create PDF here
        this.nextPage()
    }

    nextPage() {
        this.router.navigate(['/confirm-order']);
    }
}
