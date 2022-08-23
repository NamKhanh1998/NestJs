import { CacheModule, Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customers]),
    CacheModule.register({
      ttl: 5,
      max: 100,
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
