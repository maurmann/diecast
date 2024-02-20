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
  async getAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    const models = await this.modelService.getAll(pageNumber);
    return models;
  }

  @Get('/count')
  async count() {
    const data = await this.modelService.count();
    const rows = JSON.stringify(parseInt(data[0].modelscount));
    return rows;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(modelCreateSchema))
  async create(@Body() newModel: ModelCreateDto) {
    await this.modelService.create(newModel);
  }
}
