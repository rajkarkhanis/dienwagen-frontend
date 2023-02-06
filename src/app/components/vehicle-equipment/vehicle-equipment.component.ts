import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vehicle-equipment',
    templateUrl: './vehicle-equipment.component.html',
    styleUrls: ['./vehicle-equipment.component.css'],
})
export class VehicleEquipmentComponent {
    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['paint'])
    }

    selectVehicleEquipment() {
        console.log(`Build JSON Object here`)
    }
}
