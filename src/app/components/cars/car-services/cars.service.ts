import { Injectable } from '@angular/core';

import { Car } from './../car.model';

@Injectable()
export class CarsService {
    constructor() { }

    getCars(): Array<Car> {
        return [
            new Car(1, 'Auris', 'blue'),
            new Car(2, 'Bora', 'black'),
            new Car(3, 'Celica', 'pink'),
            new Car(4, 'Duster', 'silver'),
            new Car(5, 'Focus', 'white')
        ];
    }
}