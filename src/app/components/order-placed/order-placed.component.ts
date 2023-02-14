import { Component } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { OrderDataService } from 'src/app/services/order-data.service';

@Component({
    selector: 'app-order-placed',
    templateUrl: './order-placed.component.html',
    styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent {
    order: Order;

    constructor(private orderDataService: OrderDataService) {
        this.order = orderDataService.getOrder();
    }
}
