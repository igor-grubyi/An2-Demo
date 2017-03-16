import { Component, OnInit } from '@angular/core';
import { Car } from './components/cars/car.model';
import { CarsService } from './components/cars/car-services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  car: Car;
  cars: Array<Car>;

  constructor(
    public carsService: CarsService
     ){}

  ngOnInit(){
    this.cars = this.carsService.getCars();
  }
  
  // onAddCar(car: Car): void {
  //   this.cars.push(car);
  // }

}
