import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfiguratorComponent } from './configurator/configurator.component';
@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  configuratorComponent: ConfiguratorComponent | undefined;
  private monthlyPriceSubject = new BehaviorSubject<number>(0);
  monthlyPrice = 0;
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

    const responseData = await data.json();
    return responseData?.data?.monthlyPrice;
  }

  setMonthlyPrice(price: number) {
    this.monthlyPriceSubject.next(price);
  }

  getMonthlyPriceObservable() {
    return this.monthlyPriceSubject.asObservable();
  }

  getMonthlyPrice() {
    return this.monthlyPrice;
  }

  submitConfiguratorForm(contractType: string, hasSolarPanels: boolean, energyUsage: number, gasUsage: number, yearlyYield: number) {
    console.log(contractType, hasSolarPanels, energyUsage, gasUsage, yearlyYield);
    this.getConfiguratorPrice(contractType, hasSolarPanels, energyUsage, gasUsage, yearlyYield)
      .then(data => {
        console.log(JSON.stringify(data));
        console.log(data);
        if (data) {
          this.setMonthlyPrice(Number(data))
        } else {
          console.error('Fout bij het ontvangen van maandelijkse prijsgegevens');
        }
      })
      .catch(error => {
        console.error('Fout bij het ophalen van configuratorprijs:', error);
      });
  }
}
