import {
  Body,
  Controller,
  Delete,
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
    const modelResponseDto = await this.modelService.getAll(pageNumber, search);
    return modelResponseDto;
  }

  /*
  @Get('/count')
  async count(@Query('search') search: string) {
    const data = await this.modelService.count(search);
    return data;
  }
  */

  @Post()
  @UsePipes(new ZodValidationPipe(modelCreateSchema))
  async create(@Body() newModel: ModelCreateDto) {
    await this.modelService.create(newModel);
  }

  @Delete('/id/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.modelService.delete(id);
  }

  @Put('/id/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() existingModel: ModelCreateDto,
  ) {
    await this.modelService.update(id, existingModel);
  }
}
