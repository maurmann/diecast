/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './model/model.module';
import { SeriesModule } from './series/series.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';

@Module({
  imports: [
    ModelModule,
    BrandModule,
    SeriesModule,
    ManufacturerModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
