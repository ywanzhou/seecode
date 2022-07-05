import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';

export class CreateUserDto {
  readonly name: string;
  readonly age: number;
  readonly hobby: string;
}
@Controller('cats')
export class CatsController {
  @Post('create')
  async create(@Body() user: CreateUserDto): Promise<CreateUserDto> {
    console.log(user);
    return user;
  }

  @Get('find/:id')
  findAll(@Req() request: Request): string {
    console.log(request.query);
    console.log(request.params);
    return 'this action returns all cats';
  }
  @Get('promise')
  async promise(): Promise<string> {
    return 'promise';
  }
}
