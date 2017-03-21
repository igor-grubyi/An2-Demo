import { Component, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';
import { Car } from './../../car.model';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
})

export class CarComponent {
    @Input() car: Car;
    @Output() delete: EventEmitter<Car>;
    @Output() select: EventEmitter<Car>;

    @HostBinding('style.background-color') b_colorrr = "yellow";
    
    constructor() {
        this.delete = new EventEmitter<Car>();
        this.select = new EventEmitter<Car>();
    }    

    selectCar(event: any): void {
        this.select.emit(this.car);
    }

    deleteCar(event: any): void {
        this.car.state = 'deleted';
        this.delete.emit(this.car);
    }

     @HostListener('mouseenter') onMouseEnter() {
        this.b_colorrr= "green" ;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.b_colorrr = "yellow" ;
    }
  
}