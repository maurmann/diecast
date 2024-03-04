import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { modelCreateSchema, ModelCreateDto } from './model.create.schema';
import { ZodValidationPipe } from 'src/pipes/zod.validation.pipe';

@Controller('/models/')
export class ModelController {
  constructor(private modelService: ModelService) {}

  @Get()
  async getAll(
    @Query('pageNumber', ParseIntPipe) pageNumber: number,
    @Query('search') search: string,
  ) {
    const models = await this.modelService.getAll(pageNumber, search);
    return models;
  }

  @Get('/count')
  async count(@Query('search') search: string) {
    const data = await this.modelService.count(search);

    console.log(data);

    //const rows = JSON.stringify(parseInt(data[0]));
    //return rows;
    return data;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(modelCreateSchema))
  async create(@Body() newModel: ModelCreateDto) {
    await this.modelService.create(newModel);
  }
}
