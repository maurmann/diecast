/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ModelSeriesService } from './modelSeries.service';

@Controller('/series')
export class ModelSeriesController {
    constructor(private modelSeriesService: ModelSeriesService) { }

    @Get('/:brandId')
    async getAll(@Param('brandId', ParseIntPipe) brandId: number) {
        const modelSeries = await this.modelSeriesService.getAll(brandId);
        return modelSeries;
    }
}
