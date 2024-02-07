/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ModelBrandController } from './modelBrand.controller';
import { ModelBrandService } from './modelBrand.service';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [ModelBrandController],
    providers: [PrismaService, ModelBrandService],
})
export class ModelBrandModule { }
