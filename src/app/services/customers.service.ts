import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CustomersService {
    constructor(private http: HttpClient) {}

    BASE_URL: string = 'http://localhost:8090';

    getCustomers() {
        return this.http.get(`${this.BASE_URL}/customers`);
    }
}
