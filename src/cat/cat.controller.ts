import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
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
}
