import { Component } from '@angular/core';
import { VehicleRequest } from './classes/vehicle-request';
import { RequestDataService } from './services/request-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'dienwagen-frontend';

    vehicleRequest: VehicleRequest | undefined;

    constructor(private requestDataService: RequestDataService) {
        this.requestDataService.vehicleRequestSubject.subscribe(request => {
            this.vehicleRequest = request;
        })
    }
}
