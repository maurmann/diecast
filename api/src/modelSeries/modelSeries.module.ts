/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ModelSeriesService } from './modelSeries.service';
import { ModelSeriesController } from './modelSeries.controller';

@Module({
    controllers: [ModelSeriesController],
    providers: [PrismaService, ModelSeriesService],
})
export class ModelSeriesModule { }
