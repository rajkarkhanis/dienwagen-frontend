import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleRequest } from '../classes/vehicle-request';

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(private http: HttpClient) {}

    createRequest() {
        return this.http.get(`http://localhost:8080/requests/new`)
    }

    saveRequest(vehicleRequest: VehicleRequest) {
        return this.http.post(`http://localhost:8080/requests/save`, vehicleRequest)
    }

    getCatalogue() {
        return this.http.get(`http://localhost:8080/models`)
    }

    getVehiclesByFilter(filter: any) {
        return this.http.post(`http://localhost:8080/models`, filter)
    }

    getPaints() {
        return this.http.get(`http://localhost:8080/paints`)
    }

    getEquipments() {
        return this.http.get(`http://localhost:8080/equipments`)
    }
}
