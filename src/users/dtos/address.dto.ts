import { IsNotEmpty, IsString } from 'class-validator';

export class AddressDTO {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  district: string;
}
