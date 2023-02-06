import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-agreement',
    templateUrl: './agreement.component.html',
    styleUrls: ['./agreement.component.css'],
})
export class AgreementComponent {
    constructor(private router: Router) {}

    printAgreement() {
        this.router.navigate(['/confirm-order'])
    }
}
