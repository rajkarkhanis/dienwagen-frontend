import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirm-order',
    templateUrl: './confirm-order.component.html',
    styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent {
    constructor(private router: Router) {}

    placeOrder() {
        this.router.navigate(['/order-placed'])
    }
}
