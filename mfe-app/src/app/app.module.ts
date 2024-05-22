import { createCustomElement } from '@angular/elements';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SitesModule, SiteListComponent } from '@/module/sites';
import { HomeComponent } from '@/module/home';
import { ProductListComponent } from '@/module/products';
import { SiteComponent } from './sites/components';
import { ProductComponent } from './products/components';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sites', component: SiteListComponent },
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const sitesEl = createCustomElement(SiteComponent, {
      injector: this.injector,
    });
    const productEl = createCustomElement(ProductComponent, {
      injector: this.injector,
    });

    customElements.define('sites-app', sitesEl);
    customElements.define('products-app', productEl);
  }
}
