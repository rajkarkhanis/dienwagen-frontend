import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleRequest } from 'src/app/classes/vehicle-request';
import { RequestsService } from 'src/app/services/requests.service';
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

    selectedInteriorPaint: any;
    selectedExteriorPaint: any;

    constructor(
        private router: Router,
        private backend: RequestsService,
        private requestDataService: RequestDataService
    ) {
        this.vehicleRequest = requestDataService.getVehicleRequest();
    }

    goBack() {
        this.router.navigate(['vehicle']);
    }

    ngOnInit() {
        console.log(`From paint init: `, this.vehicleRequest);
        this.fetchData(this.vehicleRequest.vehicleModel);
    }

    fetchData(vehicleModel: any) {
        this.backend.getPaints(vehicleModel).subscribe((res) => {
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
        const foundIntPaint = this.interiorPaints.find(
            (paint: { paintId: number }) =>
                paint.paintId == Number(this.selectedInteriorPaint)
        );

        const foundExtPaint = this.exteriorPaints.find(
            (paint: { paintId: number }) =>
                paint.paintId == this.selectedExteriorPaint
        );
        
        this.vehicleRequest.totalPrice += foundIntPaint.paintPrice
        this.vehicleRequest.totalPrice += foundExtPaint.paintPrice

        this.vehicleRequest.interiorPaint = foundIntPaint;
        this.vehicleRequest.exteriorPaint = foundExtPaint;

        this.requestDataService.setVehicleRequest(this.vehicleRequest);
        this.nextPage();
    }

    nextPage() {
        this.router.navigate(['equipment']);
    }
}
