import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(private http: HttpClient) {}

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
