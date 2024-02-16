import { Injectable } from '@nestjs/common';
import { manufacturer } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ManufacturerService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<manufacturer[]> {
    return this.prisma.manufacturer.findMany({
      include: {
        country: true,
      },
    });
  }
}
