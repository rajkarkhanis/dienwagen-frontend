import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { RequestsService } from 'src/app/services/requests.service';
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

    emptyResponse: boolean = true;

    vehicleRequest: VehicleRequest;

    constructor(
        private router: Router,
        private backend: RequestsService,
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

        console.log(filter);

        this.backend.getVehiclesByFilter(filter).subscribe((res) => {
            console.log(res);
            this.response = res;
            this.lines = this.response.lines;
            this.bodies = this.response.bodies;

            if (this.lines.length > 0) {
                this.emptyResponse = false;
            }
        });
    }

    selectVehicle(index: number) {
        // get which vehicle was selected
        const selectedLine = this.lines[index];

        const bodyName = selectedLine.lineName.split(' ').pop();
        const selectedBody = this.bodies
            .filter(
                (body: { bodyType: any; vehicleModel: any }) =>
                    body.bodyType === bodyName &&
                    selectedLine.vehicleModel.modelId ===
                        body.vehicleModel.modelId
            )
            .pop();

        this.vehicleRequest.vehicleLine = selectedLine;
        this.vehicleRequest.vehicleBody = selectedBody;
        this.vehicleRequest.vehicleEngine = selectedLine.vehicleEngine;
        this.vehicleRequest.vehicleModel = selectedLine.vehicleModel;
        this.vehicleRequest.totalPrice += selectedLine.linePrice;

        this.requestDataService.setVehicleRequest(this.vehicleRequest);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['paint']);
    }
}
