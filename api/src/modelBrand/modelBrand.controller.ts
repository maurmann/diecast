/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ModelBrandService } from './modelBrand.service';


@Controller('/models/brands')
export class ModelBrandController {
    constructor(private modelBrandService: ModelBrandService) {
    }

    @Get("/:id")
    async getById(@Param("id", ParseIntPipe) id: number) {
        const modelBrand = await this.modelBrandService.getById(id);
        return modelBrand;
    }

    @Get()
    async getAll() {
        const modelBrands = await this.modelBrandService.getAll();
        return modelBrands;
    }
}
