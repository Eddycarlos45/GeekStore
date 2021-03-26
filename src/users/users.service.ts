import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  async save(createUserDTO: CreateUserDTO): Promise<IUser> {
    const userCreated = new this.userModel(createUserDTO);
    return await userCreated.save();
  }
}
