import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/classes/order';
import { OrderDataService } from 'src/app/services/order-data.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent {
    order: Order;

    constructor(
        private router: Router,
        private ordersService: OrdersService,
        private orderDataService: OrderDataService
    ) {
        this.order = orderDataService.getOrder();
    }

    checkboxState: boolean = false;

    placeOrder() {
        this.ordersService
            .saveOrder(this.order)
            .subscribe((res) => (this.order.orderId = Number(res)));
        this.router.navigate(['/order-placed']);
    }
}
