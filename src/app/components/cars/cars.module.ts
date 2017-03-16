import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListComponent } from './car-list';
import { CarComponent } from './car-list/car';
import { CarsService} from './car-services/cars.service';


@NgModule({
  declarations: [
    CarListComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [CarsService],
  exports: [
    CarListComponent,
  ]
})
export class CarsModule { }