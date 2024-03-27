import { Injectable } from '@angular/core';
import { ConfiguratorComponent } from './configurator/configurator.component';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  configuratorComponent: ConfiguratorComponent | undefined;
  url = 'http://localhost:3000/api/calculate';

  async getConfiguratorPrice(contractType: string, hasSolarPanels: boolean, energyUsage: number, gasUsage: number, yearlyYield: number): Promise<ConfiguratorComponent | undefined> {
    const data = await fetch(`${this.url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contractType": contractType,
        "hasSolarPanels": hasSolarPanels,
        "energyUsage": energyUsage,
        "gasUsage": gasUsage,
        "yearlyYield": hasSolarPanels ? yearlyYield : 0,
      })
    });

    return await data.json() ?? {};
  }

  submitConfiguratorForm(contractType: string, hasSolarPanels: boolean, energyUsage: number, gasUsage: number, yearlyYield: number) {
    console.log(contractType, hasSolarPanels, energyUsage, gasUsage, yearlyYield);
    this.getConfiguratorPrice(contractType, hasSolarPanels, energyUsage, gasUsage, yearlyYield).then(data => {
      // this.monthlyPrice = data!.monthlyPrice;
    });
  }
}
