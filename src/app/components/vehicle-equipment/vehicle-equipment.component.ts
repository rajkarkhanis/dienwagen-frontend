import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-vehicle-equipment',
    templateUrl: './vehicle-equipment.component.html',
    styleUrls: ['./vehicle-equipment.component.css'],
})
export class VehicleEquipmentComponent {
    equipments: any;
    vehicleRequest: VehicleRequest;

    selectedEquipment: any;

    constructor(
        private router: Router,
        private backend: BackendService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest()
    }

    goBack() {
        this.router.navigate(['paint']);
    }

    ngOnInit() {
        this.fetchData();
        console.log(`From equipment: `, this.vehicleRequest)
    }

    fetchData() {
        this.backend.getEquipments().subscribe((res) => {
            this.equipments = res;
            console.log(this.equipments)
        });
    }

    selectVehicleEquipment() {
        this.vehicleRequest.equipmentId = Number(this.selectedEquipment)
        console.log(`Filled object: `, this.vehicleRequest)
    }
}
