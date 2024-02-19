import { Injectable } from '@nestjs/common';
import { model } from '@prisma/client';
import { ModelCreateDto } from 'src/model/model.create.schema';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModelService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<model[]> {
    return this.prisma.model.findMany({
      skip: 0,
      take: 10,
      include: {
        brand: true,
        series: true,
        manufacturer: {
          include: {
            country: true,
          },
        },
        category: true,
      },
    });
  }

  async create(newModel: ModelCreateDto) {
    await this.prisma.model.create({
      data: {
        name: newModel.name,
        brand_id: newModel.brandId,
        series_id: newModel.seriesId,
        manufacturer_id: newModel.manufacturerId,
        year: newModel.year,
      },
    });
  }
}
