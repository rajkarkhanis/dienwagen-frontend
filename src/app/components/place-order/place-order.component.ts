import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-place-order',
    templateUrl: './place-order.component.html',
    styleUrls: ['./place-order.component.css'],
})
export class PlaceOrderComponent {
    constructor(private router: Router) {}

    showAgreement() {
        this.router.navigate(['/agreement']);
    }
}
