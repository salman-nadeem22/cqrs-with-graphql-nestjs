import { Injectable } from '@nestjs/common';
import { cars } from '../data';
import { Car } from '../models/cars.model';

@Injectable()
export class CarRepository {
  getAllCars() {
    return cars;
  }

  createCar(name: string, carNumber: number) {
    const car: any = new Car(name, carNumber);
    cars.push(car);
    return car;
  }
}
