import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [DatabaseModule, ProductsModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
