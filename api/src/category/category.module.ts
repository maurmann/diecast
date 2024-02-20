import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService],
})
export class CategoryModule {}
