import { Component, Input } from '@angular/core';
import { Site } from '@/sites/model';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent {
  @Input({ required: true }) tableData!: ReadonlyArray<Site>;
}
