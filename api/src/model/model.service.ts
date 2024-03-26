import { Injectable } from '@nestjs/common';
import { ModelCreateDto } from 'src/model/model.create.schema';
import { PrismaService } from 'src/prisma.service';
import { ModelResponseDto, Pagination } from './model.response.dto';

@Injectable()
export class ModelService {
  constructor(private prisma: PrismaService) {}

  PageSize: number = 10;

  async getById(id: number) {
    return this.prisma.model.findUnique({
      where: { id: id },
    });
  }

  async getAll(pageNumber: number, search: string): Promise<ModelResponseDto> {
    pageNumber = pageNumber < 1 ? 1 : pageNumber;
    const rows: number = await this.count(search);
    const numberOfPages: number = this.CalculateNumberOfPages(rows);
    if (pageNumber > numberOfPages) pageNumber = 1;

    const data = await this.prisma.model.findMany({
      skip: this.PageSize * (pageNumber - 1),
      take: this.PageSize,
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
      where: {
        ...this.buildSearchCondition(search),
      },
    });

    return new ModelResponseDto(
      data,
      new Pagination(this.PageSize, pageNumber, rows, numberOfPages),
    );
  }

  async count(search: string): Promise<any> {
    return this.prisma.model.count({
      where: {
        ...this.buildSearchCondition(search),
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
        category_id: newModel.categoryId,
        detail: newModel.detail,
        code: newModel.code,
      },
    });
  }

  async update(id: number, model: ModelCreateDto) {
    await this.prisma.model.update({
      data: {
        name: model.name,
        brand_id: model.brandId,
        series_id: model.seriesId,
        manufacturer_id: model.manufacturerId,
        year: model.year,
        category_id: model.categoryId,
        detail: model.detail,
        code: model.code,
      },
      where: {
        id: id,
      },
    });
  }

  async delete(id: number) {
    await this.prisma.model.delete({
      where: {
        id: id,
      },
    });
  }

  buildSearchCondition(search: string) {
    if (!search) {
      return {};
    }
    const condition = {
      OR: [
        {
          code: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          detail: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ],
    };

    return condition;
  }

  CalculateNumberOfPages(rows: number) {
    return (
      Math.floor(rows / this.PageSize) + (rows % this.PageSize > 0 ? 1 : 0)
    );
  }
}
