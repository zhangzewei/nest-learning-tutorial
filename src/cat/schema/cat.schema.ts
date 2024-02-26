import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Food } from 'src/food/food.schema';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop([{ type: mongoose.Schema.ObjectId, ref: Food.name }])
    foods: Food[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);