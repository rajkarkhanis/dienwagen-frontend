import { Injectable } from '@angular/core';
import { VehicleRequest } from '../classes/vehicle-request';

@Injectable({
    providedIn: 'root',
})
export class RequestDataService {
    private vehicleRequest: VehicleRequest = new VehicleRequest();

    constructor() {}

    getVehicleRequest(): VehicleRequest {
        return this.vehicleRequest;
    }

    setVehicleRequest(vehicleRequest: VehicleRequest) {
        this.vehicleRequest = vehicleRequest;
    }
}
