import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    vehicleRequest: VehicleRequest;
    
    constructor(
        private router: Router,
        private backend: BackendService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest()
    }

    createdRequest: any;
    
    newRequest() {
        // call backend to post a request
        this.backend.createRequest().subscribe((res) => {
            this.createdRequest = res;
            this.vehicleRequest.requestId = this.createdRequest;
            this.requestDataService.setVehicleRequest(this.vehicleRequest)
            this.nextPage();
        });
    }

    nextPage() {
        this.router.navigate(['vehicle']);
    }
}
