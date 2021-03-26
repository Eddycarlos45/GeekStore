import { IAddress } from '../dtos/create-user.dto';
import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address: IAddress;
}
