import { IsNotEmpty, IsString } from 'class-validator';

export class CredentialsDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
