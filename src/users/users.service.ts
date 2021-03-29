import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { IUser } from './interface/user.interface';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  async save(createUserDTO: CreateUserDTO): Promise<IUser> {
    const userCreated = new this.userModel(createUserDTO);
    return await userCreated.save();
  }

  async findOne(email: string): Promise<IUser> {
    try {
      return await this.userModel.findOne({ email }).exec();
    } catch (error) {
      return error;
    }
  }
}
