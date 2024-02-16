/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [BrandController],
    providers: [PrismaService, BrandService],
})
export class BrandModule { }
