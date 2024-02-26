import { IsString, IsNumber, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFoodDto {
  @IsString()
  name: string;
  @IsString()
  brand: string;
}

export class UpdateFoodDto extends PartialType(CreateFoodDto) { }
