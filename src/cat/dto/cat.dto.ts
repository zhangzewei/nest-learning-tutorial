import { IsString, IsNumber, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsArray()
  foods: string[]
}

export class UpdateCatDto extends PartialType(CreateCatDto) { }
