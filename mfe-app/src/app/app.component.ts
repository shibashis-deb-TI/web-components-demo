import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SiteComponent } from './sites/components';
import { ProductComponent } from './products/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
