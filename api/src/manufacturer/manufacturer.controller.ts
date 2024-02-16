import { Controller, Get } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';

@Controller('/manufacturers')
export class ManufacturerController {
  constructor(private manufacturerService: ManufacturerService) {}

  @Get()
  async getAll() {
    const manufacturers = await this.manufacturerService.getAll();
    return manufacturers;
  }
}
