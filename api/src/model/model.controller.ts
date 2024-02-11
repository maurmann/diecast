/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { ModelService } from "./model.service";

@Controller('/models/')
export class ModelController {
    constructor(private modelService: ModelService) { }

    @Get()
    async getAll() {
        const models = await this.modelService.getAll();
        return models;
    }
}