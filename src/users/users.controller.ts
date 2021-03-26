import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { IUser } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<IUser> {
    return await this.userService.save(createUserDTO);
  }
}
