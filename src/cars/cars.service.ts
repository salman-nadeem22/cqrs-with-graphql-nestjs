import { Injectable } from '@nestjs/common';
import { CarSchema } from './car.schema';

@Injectable()
export class CarsService {
  private cars: CarSchema[] = [];

  getAllCars() {
    return this.cars;
  }

  createNewCar(data: CarSchema) {
    this.cars.push(data);
    return this.cars[this.cars.length - 1];
  }
}
