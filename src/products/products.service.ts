import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from 'src/dtos/create-product.dto';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products') private readonly productModel: Model<IProduct>,
  ) {}
  async save(createProductDTO: CreateProductDTO): Promise<IProduct> {
    const productCreated = new this.productModel(createProductDTO);
    return await productCreated.save();
  }
}
