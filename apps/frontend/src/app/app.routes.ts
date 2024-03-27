import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/configurator',
    pathMatch: 'full'
  },
  {
    path: 'configurator',
    component: HomeComponent,
    title: 'Configurator | Soly'
  }
];
