import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';

@Module({
  controllers: [SeriesController],
  providers: [PrismaService, SeriesService],
})
export class SeriesModule {}
