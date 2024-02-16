import { PrismaService } from 'src/prisma.service';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerService } from './manufacturer.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ManufacturerController],
  providers: [PrismaService, ManufacturerService],
})
export class ManufacturerModule {}
