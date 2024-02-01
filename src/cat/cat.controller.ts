import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Get()
  getCats() {
    return 'cat controller flag: ' + this.catService.getIsChanged();
  }

  @Get('change')
  changeCats() {
    this.catService.setIsChanged();
    return 'cat controller changed, flag: ' + this.catService.getIsChanged();
  }

  @Post()
  createCat(@Body() body: CreateCatDto) {
    return body;
  }

  @Put(':id')
  updateCat(@Param('id') id: number, @Body() body: UpdateCatDto) {
    return { id: id + 1, body, typeOfID: typeof id };
  }
}
