import { Component, Input } from '@angular/core';
import { Site } from '@/model';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent {
  @Input() show: boolean = false;
  tableData: ReadonlyArray<Site> = [
    {
      id: 1,
      checked: false,
      siteId: 'Site 1',
      pod: '12345_67890',
      lastRead: '05/20/2024',
      dc: 'CLP',
      address: 'Address Line 1',
      city: 'City 1',
      state: 'State',
      meterType: 'Meter Type',
      zip: '12345',
      cycle: 10,
      loadProfile: 'Profile',
      customer: 'Customer Name',
    },
    {
      id: 2,
      checked: false,
      siteId: 'Site 1',
      pod: '12345_67890',
      lastRead: '05/20/2024',
      dc: 'CLP',
      address: 'Address Line 1',
      city: 'City 1',
      state: 'State',
      meterType: 'Meter Type',
      zip: '12345',
      cycle: 10,
      loadProfile: 'Profile',
      customer: 'Customer Name',
    },
    {
      id: 3,
      checked: false,
      siteId: 'Site 1',
      pod: '12345_67890',
      lastRead: '05/20/2024',
      dc: 'CLP',
      address: 'Address Line 1',
      city: 'City 1',
      state: 'State',
      meterType: 'Meter Type',
      zip: '12345',
      cycle: 10,
      loadProfile: 'Profile',
      customer: 'Customer Name',
    },
  ];
  headers = Object.keys(this.tableData[0]).filter((key) => key !== 'id');

  toggleCheckedRow(id: number) {
    const item = this.tableData.find((data) => data.id === id);

    if (!item) {
      return;
    }

    this.tableData = [
      ...this.tableData.filter((data) => data.id !== id),
      { ...item, checked: !item.checked },
    ];
  }

  toggleTableView() {
    this.show = !this.show;
  }
}
