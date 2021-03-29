import { isNotEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator'
export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    inventory: number;
}
