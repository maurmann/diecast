import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('/brand/piechart')
  async getBrandPieChart() {
    const data = await this.dashboardService.getBrandPieChart();
    return data;
  }

  @Get('/manufacturer/piechart')
  async getManufacturerPieChart() {
    const data = await this.dashboardService.getManufacturerPieChart();
    return data;
  }

  @Get('/category/piechart')
  async getCategoryPieChart() {
    const data = await this.dashboardService.getCategoryPieChart();
    return data;
  }

  @Get('/brand/series/statistics')
  async getStatistics() {
    const data = await this.dashboardService.getBrandAndSeriesStatistics();
    return data;
  }
}
