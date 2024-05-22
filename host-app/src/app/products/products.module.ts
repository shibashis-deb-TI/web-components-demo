import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./components/products/products.component";
import { RouterModule } from "@angular/router";

const routes = [{ path: "", component: ProductsComponent }];
@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsModule {}
