import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-search-order',
    templateUrl: './search-order.component.html',
    styleUrls: ['./search-order.component.css'],
})
export class SearchOrderComponent {
    constructor(private router: Router, private ordersService: OrdersService) {}

    orderNumber!: number;
    orderStatus: string = '';

    showOrderStatus() {
        this.ordersService
            .searchOrder(this.orderNumber)
            .subscribe((res) => (this.orderStatus = res.toString()));
    }
}
