import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorHeaderComponent } from './configurator-header.component';

describe('ConfiguratorComponent', () => {
  let component: ConfiguratorHeaderComponent;
  let fixture: ComponentFixture<ConfiguratorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfiguratorHeaderComponent]
    });
    fixture = TestBed.createComponent(ConfiguratorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
