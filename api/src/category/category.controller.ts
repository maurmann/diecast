import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('/categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getAll() {
    const categories = await this.categoryService.getAll();
    return categories;
  }
}
