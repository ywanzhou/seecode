import { Controller, Get, Post, Body } from '@nestjs/common';
import { ForbiddenException } from './../forbidden.exception';
import { CatsService } from './cats.service';
import { CreateDto } from './dto/cat';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() cat: CreateDto): Promise<void> {
    console.log(cat);
    this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    // return this.catsService.findAll();
  }
}
