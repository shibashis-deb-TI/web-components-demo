import { Component } from '@angular/core';
import { Product } from '@/products/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  tableData: ReadonlyArray<Product> = [
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i1',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i2',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i3',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i4',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i5',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i6',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
    {
      status: 'Active',
      name: 'Product',
      id: 'xa6Hoozohna7su6i7',
      startDate: '01 Apr 24',
      endDate: '31 Mar 2025',
      pod: '1066878696996468468',
      sellbackRecoveryTime: '30',
      contractBlockPrice: 100,
      approveForFixedPrice: 'Yes',
      ppa: 10,
    },
  ];
}
