import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';

/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import {
  routes as childRoutes,
  ProductsComponent,
  ProductsComponentModule
} from './components/ProductsComponent';

@Component({
  selector: 'app-root',
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/products']">Products</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: childRoutes }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsComponentModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
