import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const user = 'zzw';
const password = 'pass123';
const dbName = 'pets';

@Module({
    imports: [
        MongooseModule.forRoot(
            `mongodb+srv://${user}:${password}@cluster0.zxzpzz8.mongodb.net/${dbName}`
        ),
    ],
})
export class DatabaseModule { }