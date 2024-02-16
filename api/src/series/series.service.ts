import { Injectable } from '@nestjs/common';
import { series } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SeriesService {
  constructor(private prisma: PrismaService) {}

  async getAll(brandId: number): Promise<series[]> {
    return this.prisma.series.findMany({
      where: {
        brand_id: brandId,
      },
    });
  }
}
