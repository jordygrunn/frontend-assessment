import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfiguratorHeaderComponent } from '../configurator-header/configurator-header.component';
import { ConfiguratorFooterComponent } from '../configurator-footer/configurator-footer.component';
import { ConfiguratorService } from '../configurator.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ConfiguratorHeaderComponent, ConfiguratorFooterComponent, ReactiveFormsModule],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {
  configuratorService = inject(ConfiguratorService);

  constructor() {
    this.checkIfGasUsageIsRequired();
    this.checkIfyearlyYieldIsRequired();
  }

  applyForm = new FormGroup({
    contractType: new FormControl('ENERGY'),
    hasSolarPanels: new FormControl(false),
    energyUsage: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ]),
    gasUsage: new FormControl(),
    yearlyYield: new FormControl()
  });

  checkIfyearlyYieldIsRequired() {
    this.applyForm.get('hasSolarPanels')?.valueChanges.subscribe((value) => {
      const yearlyYieldControl = this.applyForm.get('yearlyYield');
      if (value === true) {
        yearlyYieldControl?.setValidators([Validators.required, Validators.pattern(/^\d+$/)]);
      } else {
        yearlyYieldControl?.clearValidators();
      }
      yearlyYieldControl?.updateValueAndValidity();
    });
  }

  checkIfGasUsageIsRequired() {
    this.applyForm.get('contractType')?.valueChanges.subscribe((value) => {
      const gasUsageControl = this.applyForm.get('gasUsage');
      if (value === 'BOTH') {
        gasUsageControl?.setValidators([Validators.required, Validators.pattern(/^\d+$/)]);
      } else {
        gasUsageControl?.clearValidators();
      }
      gasUsageControl?.updateValueAndValidity();
    });
  }



  submitConfiguratorForm() {
    this.configuratorService.submitConfiguratorForm(
      this.applyForm.value.contractType ?? 'ENERGY',
      this.applyForm.value.hasSolarPanels ?? false,
      this.applyForm.value.energyUsage ?? 0,
      this.applyForm.value.gasUsage ?? 0,
      this.applyForm.value.yearlyYield ?? 0
    );
  }

}
