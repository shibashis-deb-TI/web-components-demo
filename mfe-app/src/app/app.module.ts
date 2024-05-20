import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { SiteListComponent } from './sites/containers/site-list/site-list.component';
import { SitesModule } from './sites/sites.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SitesModule],
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
