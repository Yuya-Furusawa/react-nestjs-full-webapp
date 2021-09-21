import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { NewCarInput } from "./dto/new-car.input";
import { Car } from "./entities/car";

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>){}
  public async getAllCars(): Promise<Car[]>{
    return this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      throw new InternalServerErrorException();
    });
    return newCar;
  }
}