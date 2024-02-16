import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SeriesService } from './series.service';

@Controller('/series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @Get('/:brandId')
  async getAll(@Param('brandId', ParseIntPipe) brandId: number) {
    const series = await this.seriesService.getAll(brandId);
    return series;
  }
}
