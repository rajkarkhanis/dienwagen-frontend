import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../classes/order';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    constructor(private http: HttpClient) {}

    BASE_URL: string = 'http://localhost:8060';

    saveOrder(order: Order) {
        return this.http.post(`${this.BASE_URL}/orders`, order);
    }

    searchOrder(orderId: number) {
        return this.http.get(`${this.BASE_URL}/orders/status/${orderId}`, {
            responseType: 'text',
            observe: 'response'
        });
    }
}
