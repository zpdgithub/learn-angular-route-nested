/*
 * Angular
 */
import { Component } from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

/*
 * Components
 */
import { MainComponent } from './products/MainComponent';
import { InterestComponent } from './products/InterestComponent';
import { SportifyComponent } from './products/SportifyComponent';
import { ByIdComponent } from './products/ByIdComponent';

@Component({
  selector: 'products',
  template: `
  <h2>Products</h2>

  <div class="navLinks">
    <a [routerLink]="['./main']">Main</a> |
    <a [routerLink]="['./interest']">Interest</a> |
    <a [routerLink]="['./sportify']">Sportify</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})

export class ProductsComponent {
}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: ByIdComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
];
