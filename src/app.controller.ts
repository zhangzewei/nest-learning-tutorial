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
} from '@nestjs/common';
import { AppService } from './app.service';

class CustomForbiddenException extends HttpException {
  constructor(description) {
    super('custom forbidden', HttpStatus.FORBIDDEN, {
      description,
    });
  }
}

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name')
  getHello(@Param('name') a: string): string {
    throw new CustomForbiddenException('custom description');
    return `Say hello to ${a}`;
  }

  @Post('create')
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
