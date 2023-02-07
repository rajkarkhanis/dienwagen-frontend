import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-vehicle-equipment',
    templateUrl: './vehicle-equipment.component.html',
    styleUrls: ['./vehicle-equipment.component.css'],
})
export class VehicleEquipmentComponent {
    constructor(private router: Router, private backend: BackendService) {}

    equipments: any;

    goBack() {
        this.router.navigate(['paint']);
    }

    ngOnInit() {
        this.fetchData()
    }

    fetchData() {
        this.backend.getEquipments().subscribe(res => {
            this.equipments = res
        })
    }

    selectVehicleEquipment() {
        console.log(`Build JSON Object here`);
    }
}
