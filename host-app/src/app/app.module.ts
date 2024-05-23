import { MaintenanceComponent } from "./maintenance/components/maintenance/maintenance.component";
import { HeaderModule } from "./header/header.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "opportunities",
    loadChildren: () =>
      import("./opportunities").then((m) => m.OpportunitiesModule),
  },
  {
    path: "products",
    loadChildren: () => import("./products").then((m) => m.ProductsModule),
  },
  {
    path: "maintenance",
    component: MaintenanceComponent,
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
