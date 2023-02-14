import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
    customer: Customer;
    vehicleRequest: VehicleRequest;

    constructor(
        private customerDataService: CustomerDataService,
        private requestDataService: RequestDataService,
        private router: Router
    ) {
        this.customer = customerDataService.getCustomer();
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    acceptOffer() {
        this.router.navigate(['order'])
    }
}
