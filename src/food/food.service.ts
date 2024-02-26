import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './food.dto';
import { Food } from './food.schema';
@Injectable()
export class FoodService {
    isChanged = false;
    constructor(
        @InjectModel(Food.name) private foodModel: Model<Food>
    ) { }

    async findAll() {
        return this.foodModel.find();
    }

    async create(createFoodDto: CreateFoodDto) {
        const createdCat = new this.foodModel(createFoodDto);
        return createdCat.save();
    }
}
