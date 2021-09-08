import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CarRepository } from '../../repository/cars.repository';
import { GetAllCarsQuery } from '../impl';

@QueryHandler(GetAllCarsQuery)
export class GetAllCarHandler implements IQueryHandler<GetAllCarsQuery> {
  constructor(private readonly repository: CarRepository) {}

  async execute(query: GetAllCarsQuery) {
    return this.repository.getAllCars();
  }
}
