import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { ForbiddenException } from './../forbidden.exception';
import { HttpExceptionFilter } from './../http-exception.filter';
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
  @UseFilters(HttpExceptionFilter) // 尽可能使用类而不是实例。由于 Nest 可以轻松地在整个模块中重复使用同一类的实例，因此可以减少内存使用。
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    // return this.catsService.findAll();
  }
}
