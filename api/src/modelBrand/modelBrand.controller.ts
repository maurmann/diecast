/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ModelBrandService } from './modelBrand.service';
import { PostBrandDto } from 'src/model/getModel.dto';


@Controller('/brands')
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

    @Post()
    //@UsePipes(new ZodValidationPipe(modelCreateSchema))
    async create(@Body() brand: PostBrandDto) {
        await await this.modelBrandService.create(brand);
    }
}
