import { Injectable } from '@nestjs/common';
import { Cat } from './schema/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/cat.dto';
import { FoodService } from 'src/food/food.service';

@Injectable()
export class CatService {
  isChanged = false;
  constructor(
    @InjectModel(Cat.name) private catModel: Model<Cat>,
    private foodService: FoodService
  ) { }

  async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll() {
    const cats = await this.catModel.find();
    const foods = await this.foodService.findAll();
    cats.map(cat => {
      const newFoods = cat.foods.map(fid => foods.find(fd => fd.id.toString() === fid.toString()));
      cat.foods = newFoods;
      return cat;
    });
    return cats;
  }

  getIsChanged() {
    return this.isChanged;
  }
}
