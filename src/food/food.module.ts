import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from './food.schema';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Food.name,
            schema: FoodSchema
        }])
    ],
    controllers: [FoodController],
    providers: [FoodService],
    exports: [FoodService]
})
export class FoodModule { }
