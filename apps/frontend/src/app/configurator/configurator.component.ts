import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiguratorHeaderComponent } from '../configurator-header/configurator-header.component';
import { ConfiguratorFooterComponent } from '../configurator-footer/configurator-footer.component';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ConfiguratorHeaderComponent, ConfiguratorFooterComponent],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss',

})
export class ConfiguratorComponent {
  constructor() {
    console.log('Configurator');
  }

}
