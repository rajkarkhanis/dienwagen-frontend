import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { BackendService } from 'src/app/services/backend.service';
import { RequestDataService } from 'src/app/services/request-data.service';

@Component({
    selector: 'app-vehicle-paint',
    templateUrl: './vehicle-paint.component.html',
    styleUrls: ['./vehicle-paint.component.css'],
})
export class VehiclePaintComponent {
    paints: any;
    interiorPaints: any;
    exteriorPaints: any;

    vehicleRequest: VehicleRequest;

    constructor(
        private router: Router,
        private backend: BackendService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest()
    }

    goBack() {
        this.router.navigate(['vehicle']);
    }

    ngOnInit() {
        this.fetchData();
        console.log(`From paints: `, this.vehicleRequest)
    }

    fetchData() {
        this.backend.getPaints().subscribe((res) => {
            this.paints = res;
            this.interiorPaints = this.paints.filter(
                (paint: { paintType: string }) => paint.paintType === 'Interior'
            );
            this.exteriorPaints = this.paints.filter(
                (paint: { paintType: string }) => paint.paintType === 'Exterior'
            );
        });
    }

    selectVehiclePaint() {
        console.log(`Build JSON Object here`);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['equipment']);
    }
}
