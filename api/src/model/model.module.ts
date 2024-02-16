import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { PrismaService } from 'src/prisma.service';
import { ModelService } from './model.service';

@Module({
  controllers: [ModelController],
  providers: [PrismaService, ModelService],
})
export class ModelModule {}
