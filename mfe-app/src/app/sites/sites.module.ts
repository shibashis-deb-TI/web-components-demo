import { SiteComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteListComponent } from './containers';

@NgModule({
  declarations: [SiteListComponent, SiteComponent],
  imports: [CommonModule],
  exports: [SiteListComponent],
})
export class SitesModule {}
