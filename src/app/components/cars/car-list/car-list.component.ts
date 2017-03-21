import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Car }  from './../car.model';
import { CarFormComponent } from './car-form';

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
    title='Cars market';
    private _count: number;
    private selectedCar: Car;

    @Input() cars: Array<Car>;
    @ViewChild(CarFormComponent) carForm: CarFormComponent;
    constructor() { }

    ngOnInit() {
        this._count=this.cars.length;
    }

    onAddCar(car: Car): void {
      this.cars.push(car);  
    }

    onDeleteCar(car: Car): void {
        this._count--;
        if (this.selectedCar != undefined) {
            this.carForm.ClearForms();
        }
    }

    onSelectCar(car: Car): void {
        this.selectedCar = car;
        this.carForm.car = car;
        this.carForm.ApplyCar(car);
    }

}
