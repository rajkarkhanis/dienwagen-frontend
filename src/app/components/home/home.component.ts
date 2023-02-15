import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { RequestsService } from 'src/app/services/requests.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    vehicleRequest: VehicleRequest;
    searchRequestId!: number;
    createdRequest: any;

    constructor(
        private router: Router,
        private requestsService: RequestsService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    searchRequest() {
        console.log('Request id to search for: ', this.searchRequestId);
        this.requestsService
            .searchRequest(this.searchRequestId)
            .subscribe((res) => {
                this.vehicleRequest = Object.assign(res);
                console.log(this.vehicleRequest);
                this.requestDataService.setVehicleRequest(this.vehicleRequest);

                // check if vehicle is already configured (equipment is present)
                if (this.vehicleRequest.vehicleEquipment.equipmentId !== null) {
                    this.goToCustomers()
                } else {
                    this.nextPage();
                }
            });
    }

    newRequest() {
        // call backend to post a request
        this.requestsService.createRequest().subscribe((res) => {
            this.createdRequest = res;
            this.vehicleRequest.requestId = this.createdRequest;
            this.requestDataService.setVehicleRequest(this.vehicleRequest);
            this.nextPage();
        });
    }

    goToCustomers() {
        this.router.navigate(['customer'])
    }

    nextPage() {
        this.router.navigate(['vehicle']);
    }
}
