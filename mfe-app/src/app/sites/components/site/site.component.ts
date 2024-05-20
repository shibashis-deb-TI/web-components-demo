import { Site } from '@/model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  @Input({ required: true }) tableData!: ReadonlyArray<Site>;

  @Output() toggleSelect = new EventEmitter<number>();

  headers!: string[];

  ngOnInit(): void {
    this.headers = Object.keys(this.tableData[0])
      .filter((key) => key !== 'id')
      .map((key) => key.toUpperCase());
  }

  handleCheckedRow(id: number) {
    if (!id) {
      return;
    }

    this.toggleSelect.emit(id);
  }
}
