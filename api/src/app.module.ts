/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelBrandModule } from './modelBrand/modelBrand.module';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './model/model.module';
import { ModelSeriesModule } from './modelSeries/modelSeries.module';

@Module({
  imports: [
    ModelModule,
    ModelBrandModule,
    ModelSeriesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
