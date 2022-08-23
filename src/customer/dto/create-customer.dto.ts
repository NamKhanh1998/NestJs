import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './create-address.dto';

export class CreateCustomerDto {
  @IsString()
  First_name: string;

  @IsString()
  Last_name: string;

  @IsEmail()
  Email: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
