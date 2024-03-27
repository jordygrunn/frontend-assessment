import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-configurator-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './configurator-footer.component.html',
  styleUrl: './configurator-footer.component.scss',

})
export class ConfiguratorFooterComponent {
  configuratorPrice = '';

  constructor() {
    this.processConfiguratorPrice(102.31);
  }
  processConfiguratorPrice(price: number) {
    this.configuratorPrice = price.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
  }
}
