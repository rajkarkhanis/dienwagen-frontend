import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vehicle-paint',
    templateUrl: './vehicle-paint.component.html',
    styleUrls: ['./vehicle-paint.component.css'],
})
export class VehiclePaintComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['line'])
    }

    selectVehiclePaint() {
        console.log(`Build JSON Object here`)
        this.router.navigate(['equipment'])
    }
}
