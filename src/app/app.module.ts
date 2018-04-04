import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import { ProductsComponent } from './components/ProductsComponent';

@Component({
  selector: 'app-root',
  template: `(root)`
})
export class AppComponent {
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
