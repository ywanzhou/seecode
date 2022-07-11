import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ForbiddenException } from './../forbidden.exception';
import { HttpExceptionFilter } from './../http-exception.filter';
import { CatsService } from './cats.service';
import { CreateDto } from './dto/cat';
import { Cat } from './interface/cat.interface';
import { ValidationPipe } from './../validate.pipe';
import { AuthGuard } from './../roles.guard';
import { Roles } from '../roles.decorator';

@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  async create(@Body(new ValidationPipe()) cat: CreateDto): Promise<void> {
    this.catsService.create(cat);
  }

  @Get()
  @UseFilters(HttpExceptionFilter)
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    // return this.catsService.findAll();
  }
}
