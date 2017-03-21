import { Component, EventEmitter, Input, Output, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Car } from './../../car.model';

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {
    @Input() car: Car;
    @Output() add: EventEmitter<Car>;
    @ViewChild('model') modelInput: ElementRef;
    @ViewChild('color') colorInput: ElementRef;
    @ViewChild('price') priceInput: ElementRef; 
    
    constructor() {
        this.add = new EventEmitter<Car>();
     }

    onAddCar(event: any): void {
        let lCar = new Car(77, 
        (<HTMLInputElement>this.modelInput.nativeElement).value,
        (<HTMLInputElement>this.colorInput.nativeElement).value,
        (<HTMLInputElement>this.priceInput.nativeElement).valueAsNumber);
        lCar.state = 'for sale';
        this.add.emit(lCar);
    }

    onChangeCar(event: any): void {
        this.car.model = (<HTMLInputElement>this.modelInput.nativeElement).value;
        this.car.color = (<HTMLInputElement>this.colorInput.nativeElement).value;
        this.car.price = (<HTMLInputElement>this.priceInput.nativeElement).valueAsNumber;
    } 

    ApplyCar(car: Car) {
        (<HTMLInputElement>this.modelInput.nativeElement).value = this.car.model;
        (<HTMLInputElement>this.colorInput.nativeElement).value = this.car.color;
        (<HTMLInputElement>this.priceInput.nativeElement).valueAsNumber = this.car.price;
    }      

    ClearForms() {
        (<HTMLInputElement>this.modelInput.nativeElement).value = '';
        (<HTMLInputElement>this.colorInput.nativeElement).value = '';
        (<HTMLInputElement>this.priceInput.nativeElement).value = '';  
    }

}