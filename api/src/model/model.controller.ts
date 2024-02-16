import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ModelService } from './model.service';
import { modelCreateSchema, ModelCreateDto } from './model.create.schema';
import { ZodValidationPipe } from 'src/pipes/zod.validation.pipe';

@Controller('/models/')
export class ModelController {
  constructor(private modelService: ModelService) {}

  @Get()
  async getAll() {
    const models = await this.modelService.getAll();
    return models;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(modelCreateSchema))
  async create(@Body() newModel: ModelCreateDto) {
    await this.modelService.create(newModel);
  }
}
