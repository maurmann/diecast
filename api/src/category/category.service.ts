import { Injectable } from '@nestjs/common';
import { category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<category[]> {
    return this.prisma.category.findMany({});
  }
}
