import { HeaderModule } from "./header/header.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./header/components";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "opportunities",
        loadChildren: () =>
          import("./opportunities/opportunities.module").then(
            (m) => m.OpportunitiesModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
