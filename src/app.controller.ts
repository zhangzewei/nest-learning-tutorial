import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { RolesGuard } from './guard/role.guard';
import { Roles } from './guard/role.decorator';

class CustomForbiddenException extends HttpException {
  constructor(description) {
    super('custom forbidden', HttpStatus.FORBIDDEN, {
      description,
    });
  }
}

@Controller('app')
export class AppController {
  constructor(private readonly catService: CatService) {}

  @Get('hello/:name')
  getHello(@Param('name') a: string) {
    return 'app controller flag: ' + this.catService.getIsChanged();
  }

  @Post('create')
  @Roles(['admin'])
  @UseGuards(RolesGuard)
  createHello(@Body() body: { name: string; age: string }) {
    return `Create hello to ${body.name}, age is ${body.age}`;
  }

  @Put('edit/:name')
  changeHelloAge(
    @Param('name') name: string,
    @Body()
    body: {
      age?: string;
    },
  ) {
    return `Change ${name}'s age to ${body.age}`;
  }

  @Delete('delete/:name')
  deleteHello(@Param('name') name: string) {
    return `Delete ${name}`;
  }
}
