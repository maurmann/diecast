import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('/brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const brand = await this.brandService.getById(id);
    return brand;
  }

  @Get()
  async getAll() {
    const brands = await this.brandService.getAll();
    return brands;
  }
}
