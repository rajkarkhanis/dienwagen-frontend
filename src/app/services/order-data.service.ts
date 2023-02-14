import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../classes/order';

@Injectable({
    providedIn: 'root',
})
export class OrderDataService {
    constructor() {}

    private order: Order = new Order();
    public orderSubject: Subject<Order> = new Subject<Order>();

    getOrder() : Order {
        return this.order
    }

    setOrder(newOrder: Order) {
        this.order = newOrder
        this.orderSubject.next(this.order)
    }
}
