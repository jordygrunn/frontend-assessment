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
  constructor() {
    console.log('Configurator footer');
  }

}
