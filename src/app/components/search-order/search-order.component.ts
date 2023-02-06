import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-order',
    templateUrl: './search-order.component.html',
    styleUrls: ['./search-order.component.css'],
})
export class SearchOrderComponent {
    constructor(private router: Router) {}

    showOrderStatus() {
        this.router.navigate(['/order-status'])
    }
}
