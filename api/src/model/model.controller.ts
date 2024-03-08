import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { modelCreateSchema, ModelCreateDto } from './model.create.schema';
import { ZodValidationPipe } from 'src/pipes/zod.validation.pipe';

@Controller('/models/')
export class ModelController {
  constructor(private modelService: ModelService) {}

  @Get('/id/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const model = await this.modelService.getById(id);
    return model;
  }

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
    return data;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(modelCreateSchema))
  async create(@Body() newModel: ModelCreateDto) {
    await this.modelService.create(newModel);
  }

  @Put('/id/:id')
  //@UsePipes(new ZodValidationPipe(modelCreateSchema))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() existingModel: ModelCreateDto,
  ) {
    console.log(existingModel);
    await this.modelService.update(id, existingModel);
  }
}
