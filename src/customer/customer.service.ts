import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customers } from './entities/customer.entity';
import { plainToClass, plainToInstance } from 'class-transformer';
import { CustomerType } from './types';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customers) private customerRepo: Repository<Customers>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customers> {
    const customer = this.customerRepo.create(createCustomerDto);

    if (await this.customerRepo.findOneBy({ Email: createCustomerDto.Email })) {
      throw new HttpException(
        'This email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.customerRepo.save(customer);
  }

  async findAll() {
    console.log(this.customerRepo);

    const users = await this.customerRepo.find();
    return users;
  }

  async findOne(id: number): Promise<Customers | null> {
    const customer = await this.customerRepo.findOneBy({ id });

    if (customer) {
      return customer;
    } else {
      throw new NotFoundException();
    }
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  async remove(id: number) {
    const user = await this.customerRepo.findOneBy({ id });
    return await this.customerRepo.remove(user);
  }
}
