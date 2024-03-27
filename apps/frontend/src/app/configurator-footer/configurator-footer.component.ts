import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiguratorService } from '../configurator.service';

@Component({
  selector: 'app-configurator-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './configurator-footer.component.html',
  styleUrl: './configurator-footer.component.scss',

})
export class ConfiguratorFooterComponent {
  configuratorPrice = '';

  constructor(private configuratorService: ConfiguratorService) {
    this.processConfiguratorPrice();
  }

  processConfiguratorPrice() {
    this.configuratorPrice = this.configuratorService.getMonthlyPrice().toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
  }
}
