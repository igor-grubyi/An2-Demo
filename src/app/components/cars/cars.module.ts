import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarListComponent } from './car-list';
import { CarComponent } from './car-list/car';
import { CarsService } from './car-services/cars.service';
import { CarFormComponent } from './car-list/car-form';


@NgModule({
  declarations: [
    CarListComponent,
    CarComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CarsService],
  exports: [
    CarListComponent,
    CarFormComponent
  ]
})
export class CarsModule { }