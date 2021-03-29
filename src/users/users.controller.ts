import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CredentialsDTO } from './dtos/creadentials.dto';
import { CreateUserDTO } from './dtos/create-user.dto';
import { IUser } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<IUser> {
    return await this.userService.save(createUserDTO);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() credentials: CredentialsDTO): Promise<Object> {
    return this.authService.login(credentials);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async listUser(){
    
  }
}
