import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { RequestsService } from 'src/app/services/requests.service';
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
        private backend: RequestsService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    goBack() {
        this.router.navigate(['paint']);
    }

    ngOnInit() {
        this.fetchData(this.vehicleRequest.vehicleModel);
        console.log(`From equipment init: `, this.vehicleRequest);
    }

    fetchData(vehicleModel: any) {
        this.backend.getEquipments(vehicleModel).subscribe((res) => {
            this.equipments = res;
        });
    }

    selectVehicleEquipment() {
        // this.vehicleRequest.equipmentId = Number(this.selectedEquipment);

        const foundEquipment = this.equipments.find(
            (equipment: { equipmentId: number }) =>
                equipment.equipmentId == Number(this.selectedEquipment)
        );

        this.vehicleRequest.totalPrice += foundEquipment.equipmentPrice;
        this.vehicleRequest.vehicleEquipment = foundEquipment;

        this.requestDataService.setVehicleRequest(this.vehicleRequest);
        console.log(`Completed object: `, this.vehicleRequest);

        this.saveVehicleRequest(this.vehicleRequest);
    }

    saveVehicleRequest(vehicleRequest: VehicleRequest) {
        this.backend.saveRequest(vehicleRequest).subscribe((res) => {
            console.log(`Returned response after saving: `, res);
        });
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['customer']);
    }
}
