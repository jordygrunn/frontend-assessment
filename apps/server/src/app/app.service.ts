import { Injectable } from '@nestjs/common';
import { CalculateDTO } from './app.controller';

@Injectable()
export class AppService {
  calculateMontlyPrice(data: CalculateDTO): { data: { monthlyPrice: number } } {
    const totalUsageKwh = data.energyUsage - data.yearlyYield;
    const totalGasUsage = data.gasUsage ?? 0;
    const pricePerKwh = 0.25;
    const pricePerCubicMeter = 1.45;

    const monthlyPrice =
      (totalUsageKwh * pricePerKwh + totalGasUsage * pricePerCubicMeter) / 12;

    return { data: { monthlyPrice } };
  }
}
