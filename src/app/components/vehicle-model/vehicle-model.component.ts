import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-vehicle-model',
    templateUrl: './vehicle-model.component.html',
    styleUrls: ['./vehicle-model.component.css'],
})
export class VehicleModelComponent {
    response: any;
    modelNames: String[] = [];
    bodyNames: String[] = [];
    engineNames: String[] = [];

    selectedModel: any;
    selectedEngine: any;
    selectedBody: any;

    lines: any;
    bodies: any;
    vehicles: any;

    vehicleRequest: VehicleRequest;

    constructor(
        private router: Router,
        private backend: BackendService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    fetchData() {
        this.backend.getCatalogue().subscribe((res) => {
            this.response = res;
            this.modelNames = this.response.models;
            this.engineNames = this.response.engines;
            this.bodyNames = this.response.bodies;
        });
    }

    ngOnInit() {
        this.fetchData();
    }

    searchVehicles() {
        const filter = {
            modelName: this.selectedModel,
            engineName: this.selectedEngine,
            bodyType: this.selectedBody,
        };

        this.backend.getVehiclesByFilter(filter).subscribe((res) => {
            this.response = res;
            console.log(res);
            this.lines = this.response.lines;
            this.bodies = this.response.bodies;

            // combine the two arrays into one
            this.vehicles = this.lines.map((item: any, index: number) => ({
                ...item,
                ...this.bodies[index],
            }));

            console.log(this.vehicles);
        });
    }

    selectVehicle(index: number) {
        console.log(`Should do something here`);
        // add lineId, engineId, bodyId, modelId here to vehicleRequest
        const selectedVehicle = this.vehicles[index];
        this.vehicleRequest.lineId = selectedVehicle.lineId;
        this.vehicleRequest.bodyId = selectedVehicle.bodyId;
        this.vehicleRequest.engineId = selectedVehicle.vehicleEngine.engineId;
        this.vehicleRequest.modelId = selectedVehicle.vehicleModel.modelId;

        this.requestDataService.setVehicleRequest(this.vehicleRequest);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['paint']);
    }
}
