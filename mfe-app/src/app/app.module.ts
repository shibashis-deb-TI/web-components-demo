import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SiteListComponent } from '@/module/sites';
import { HomeComponent } from '@/module/home';
import { ProductListComponent } from '@/module/products';

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
  
}
