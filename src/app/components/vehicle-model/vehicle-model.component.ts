import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-vehicle-model',
    templateUrl: './vehicle-model.component.html',
    styleUrls: ['./vehicle-model.component.css'],
})
export class VehicleModelComponent {
    constructor(private router: Router, private backend: BackendService) {}

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

    vehicleRequest: VehicleRequest | undefined;

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

    selectVehicle() {
        console.log(`Should do something here`);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['paint']);
    }
}
