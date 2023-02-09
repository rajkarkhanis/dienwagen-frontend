import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VehicleRequest } from '../classes/vehicle-request';

@Injectable({
    providedIn: 'root',
})
export class RequestDataService {
    private vehicleRequest: VehicleRequest = new VehicleRequest();
    vehicleRequestSubject = new Subject<VehicleRequest>();

    constructor() {}

    getVehicleRequest(): VehicleRequest {
        return this.vehicleRequest;
    }

    setVehicleRequest(vehicleRequest: VehicleRequest) {
        this.vehicleRequest = vehicleRequest;
        this.vehicleRequestSubject.next(this.vehicleRequest)
    }
}
