import { createCustomElement } from '@angular/elements';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SitesModule, SiteListComponent } from '@/module/sites';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SitesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const sitesEl = createCustomElement(SiteListComponent, {
      injector: this.injector,
    });
    // const productsEl = createCustomElement(ProductsComponent, {
    //   injector: this.injector,
    // });
    customElements.define('sites-app', sitesEl);
    // customElements.define('products-app', productsEl);
  }
}
