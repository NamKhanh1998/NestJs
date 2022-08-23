import { IsEmail, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  city: string;
}
