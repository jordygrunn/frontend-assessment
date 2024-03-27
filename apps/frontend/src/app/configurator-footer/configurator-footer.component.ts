import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfiguratorService } from '../configurator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-configurator-footer',
  templateUrl: './configurator-footer.component.html',
  standalone: true,
  styleUrls: ['./configurator-footer.component.scss']
})
export class ConfiguratorFooterComponent implements OnInit, OnDestroy {
  configuratorPrice = '';
  private configuratorPriceSubscription!: Subscription;

  constructor(private configuratorService: ConfiguratorService) {}

  ngOnInit() {
    this.configuratorPriceSubscription = this.configuratorService.getMonthlyPriceObservable()
      .subscribe(price => {
        this.configuratorPrice = price.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
      });
  }

  ngOnDestroy() {
    this.configuratorPriceSubscription.unsubscribe();
  }
}
