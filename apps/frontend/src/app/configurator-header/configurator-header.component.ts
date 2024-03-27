import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-configurator-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './configurator-header.component.html',
  styleUrl: './configurator-header.component.scss',

})
export class ConfiguratorHeaderComponent {
  constructor() {
    console.log('Configurator header');
  }

}
