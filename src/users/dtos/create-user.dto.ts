import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator';
import { AddressDTO } from './address.dto';
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @Type(() => AddressDTO)
  @IsNotEmptyObject()
  @ValidateNested()
  address: AddressDTO;
}
