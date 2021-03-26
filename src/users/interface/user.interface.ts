import { AddressDTO } from '../dtos/address.dto';
import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address: AddressDTO;
}
