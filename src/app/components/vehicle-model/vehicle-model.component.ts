import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-vehicle-model',
    templateUrl: './vehicle-model.component.html',
    styleUrls: ['./vehicle-model.component.css'],
})
export class VehicleModelComponent {
modelSelect: any;
    constructor(private router: Router, private backend: BackendService) {}

    response: any;
    models: String[] = [];
    bodies: String[] = [];
    engines: String[] = [];

    selectedModel: any;
    selectedEngine: any;
    selectedBody: any;

    fetchData() {
        this.backend.getCatalogue().subscribe((res) => {
            this.response = res
            this.models = this.response.models
            this.engines = this.response.engines
            this.bodies = this.response.bodies
        });
    }

    ngOnInit() {
        this.fetchData();
    }

    searchVehicles() {
        const filter = {
            modelName: this.selectedModel,
            engineName: this.selectedEngine,
            bodyType: this.selectedBody
        }
        console.log(filter)
    }

    nextPage() {
        this.router.navigate(['line']);
    }
}
