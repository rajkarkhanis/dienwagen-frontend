import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleRequest } from '../classes/vehicle-request';

@Injectable({
    providedIn: 'root',
})
export class RequestsService {
    constructor(private http: HttpClient) {}

    BASE_URL = "http://localhost:8080"

    createRequest() {
        return this.http.get(`${this.BASE_URL}/requests/new`)
    }

    saveRequest(vehicleRequest: VehicleRequest) {
        return this.http.post(`${this.BASE_URL}/requests/save`, vehicleRequest)
    }

    getCatalogue() {
        return this.http.get(`${this.BASE_URL}/models`)
    }

    getVehiclesByFilter(filter: any) {
        return this.http.post(`${this.BASE_URL}/models`, filter)
    }

    getPaints() {
        return this.http.get(`${this.BASE_URL}/paints`)
    }

    getEquipments() {
        return this.http.get(`${this.BASE_URL}/equipments`)
    }
}
