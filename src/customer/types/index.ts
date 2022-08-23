import { Exclude } from 'class-transformer';

export class CustomerType {
  First_name: string;

  Last_name: string;

  Email: string;

  @Exclude()
  createdAt?: Date;

  @Exclude()
  updatedAt?: Date;
}
