import { Component, ViewChild } from '@angular/core';
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
    orderNotFound: boolean = false;
    @ViewChild('notFoundAlert') alert: any;

    showOrderStatus() {
        this.ordersService.searchOrder(this.orderNumber).subscribe(
            (res) => {
                if (res.status === 200) {
                    this.orderNotFound = false;
                    console.log('Flag OK: ', this.orderNotFound);
                }
                this.orderStatus = res.toString();
            },
            (error) => {
                if (error.status === 404) {
                    this.orderNotFound = true;
                    this.showAlert();
                    console.log('flag: ', this.orderNotFound);
                }
            }
        );
    }

    showAlert() {
        this.alert.nativeElement.classList.add('show');
        this.alert.nativeElement.classList.remove('hide');
    }

    hideAlert() {
        this.alert.nativeElement.classList.remove('show');
        this.alert.nativeElement.classList.add('hide');
    }
}
