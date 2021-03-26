import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { IProduct } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    async createProduct(@Body() createProductDTO: CreateProductDTO): Promise<IProduct> {
        return this.productService.save(createProductDTO)
    }
}
