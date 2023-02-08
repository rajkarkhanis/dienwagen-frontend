import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    constructor(private router: Router, private backend: BackendService) {}

    createdRequest: any;
    vehicleRequest: VehicleRequest = new VehicleRequest();

    newRequest() {
        // call backend to post a request
        this.backend.createRequest().subscribe((res) => {
            this.createdRequest = res;
            this.vehicleRequest.requestId = this.createdRequest.requestId;
        });

        // route to vehicle
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['vehicle']);
    }
}
