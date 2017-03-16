import { Component, OnInit, Input } from '@angular/core';
import { Car }  from './../car.model';

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
    title='Cars market';
    private _count: number;

    @Input() cars: Array<Car>;

    constructor() { }

    ngOnInit() {
        this._count=this.cars.length;
    }

    onSaleCar(car: Car): void {
        this._count--;
    }
}
