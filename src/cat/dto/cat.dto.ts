import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
}

export class UpdateCatDto extends PartialType(CreateCatDto) {}
