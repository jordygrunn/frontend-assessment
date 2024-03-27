import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorFooterComponent } from './configurator-footer.component';

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorFooterComponent;
  let fixture: ComponentFixture<ConfiguratorFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguratorFooterComponent]
    });
    fixture = TestBed.createComponent(ConfiguratorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
