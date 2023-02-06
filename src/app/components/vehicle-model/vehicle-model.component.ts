import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vehicle-model',
    templateUrl: './vehicle-model.component.html',
    styleUrls: ['./vehicle-model.component.css'],
})
export class VehicleModelComponent {

    constructor(private router: Router) {}

    selectVehicleModel() {
        console.log(`Will build a JSON object here`)
        this.router.navigate(['line'])
    }
}
