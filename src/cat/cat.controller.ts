import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) { }
  @Get()
  getCats() {
    return this.catService.findAll();
  }

  @Post()
  createCat(@Body() body: CreateCatDto) {
    return this.catService.create(body);
  }
}
