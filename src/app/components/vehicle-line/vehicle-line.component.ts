import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vehicle-line',
    templateUrl: './vehicle-line.component.html',
    styleUrls: ['./vehicle-line.component.css'],
})
export class VehicleLineComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['vehicle'])
    }

    selectVehicleLine() {
        console.log(`Build JSON Object here`)
        this.router.navigate(['paint'])
    }
}
