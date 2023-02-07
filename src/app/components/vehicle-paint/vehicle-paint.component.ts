import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-vehicle-paint',
    templateUrl: './vehicle-paint.component.html',
    styleUrls: ['./vehicle-paint.component.css'],
})
export class VehiclePaintComponent {
    constructor(private router: Router, private backend: BackendService) {}

    paints: any;
    interiorPaints: any;
    exteriorPaints: any;

    goBack() {
        this.router.navigate(['line']);
    }

    ngOnInit() {
        this.fetchData();
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
