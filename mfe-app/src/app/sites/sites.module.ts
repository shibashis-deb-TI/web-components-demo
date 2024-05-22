import { SiteComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteListComponent } from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SiteListComponent, SiteComponent],
  imports: [CommonModule, RouterModule],
  exports: [SiteListComponent, SiteComponent],
})
export class SitesModule {}
