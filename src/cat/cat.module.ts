import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';
import { FoodModule } from 'src/food/food.module';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Cat.name,
      schema: CatSchema
    }]),
    FoodModule
  ],
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService],
})
export class CatModule { }
