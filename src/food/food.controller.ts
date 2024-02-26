import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { CreateFoodDto } from './food.dto';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
    constructor(
        private foodService: FoodService
    ) { }
    @Get()
    findAll() {
        return this.foodService.findAll();
    }

    @Post()
    createCat(@Body() body: CreateFoodDto) {
        return this.foodService.create(body);
    }
}
