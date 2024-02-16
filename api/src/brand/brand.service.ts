import { Injectable } from '@nestjs/common';
import { brand } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<brand[]> {
    return this.prisma.brand.findMany();
  }

  async getById(id: number): Promise<brand | null> {
    return this.prisma.brand.findUnique({
      where: { id },
    });
  }
}
