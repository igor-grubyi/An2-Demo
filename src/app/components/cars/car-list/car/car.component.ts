import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from './../../car.model';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent {
    @Input() car: Car;
    @Output() sale: EventEmitter<Car>;

    constructor() {
        this.sale = new EventEmitter<Car>();
    }    

    saleCar(event: any): void {
        this.car.state = 'sold out';
        this.car.price = 0;
        this.sale.emit(this.car);
    }
}