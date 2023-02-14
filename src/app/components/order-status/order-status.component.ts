import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-order-status',
    templateUrl: './order-status.component.html',
    styleUrls: ['./order-status.component.css'],
})
export class OrderStatusComponent {
    @Input() orderNumber: number = 0
}
