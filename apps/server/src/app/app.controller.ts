import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

export class CalculateDTO {
  contractType: 'ENERGY' | 'BOTH';
  hasSolarPanels: boolean;
  energyUsage: number;
  gasUsage?: number;
  yearlyYield?: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/calculate')
  getData(@Body() data: CalculateDTO) {
    return this.appService.calculateMontlyPrice(data);
  }
}
