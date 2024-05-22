import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductListComponent, ProductComponent],
})
export class ProductsModule {}
