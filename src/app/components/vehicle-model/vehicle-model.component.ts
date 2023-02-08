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

    models: any;
    lines: any;
    engines: any;
    bodies: any;

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
            this.lines = this.response.lines;
            this.bodies = this.response.bodies;
            this.engines = this.response.engines;
        });
    }

    selectVehicle(index: number) {
        console.log(`Should do something here`);
        // add lineId, engineId, bodyId, modelId here to vehicleRequest
        const selectedLine = this.lines[index]
        this.vehicleRequest.lineId =  selectedLine.lineId
        this.vehicleRequest.engineId = selectedLine.vehicleEngine.engineId
        this.vehicleRequest.modelId = selectedLine.vehicleModel.modelId

        this.requestDataService.setVehicleRequest(this.vehicleRequest)
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['paint']);
    }
}
