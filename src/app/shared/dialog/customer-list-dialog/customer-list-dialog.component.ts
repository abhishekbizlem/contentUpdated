import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../dialog.service';

export interface PeriodicElement {
  customerName: string;
  customerEmail: string;
  group: number;
  lastContacted: string;
  priority: number;
  isAuthorized: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    customerName: 'Price Water Cooper',
    customerEmail: 'rk@gmail.com',
    group: 1,
    lastContacted: '30 mins ago via email',
    priority: 1,
    isAuthorized: true,
  },
  {
    customerName: 'Price Water Cooper2',
    customerEmail: 'rk@gmail.com',
    group: 2,
    lastContacted: '30 mins ago via email',
    priority: 2,
    isAuthorized: true,
  },
  {
    customerName: 'Price Water Cooper3',
    customerEmail: 'rk@gmail.com',
    group: 3,
    lastContacted: '30 mins ago via email',
    priority: 3,
    isAuthorized: true,
  },
];

@Component({
  selector: 'app-customer-list-dialog',
  templateUrl: './customer-list-dialog.component.html',
  styleUrls: ['./customer-list-dialog.component.scss'],
})
export class CustomerListDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomerListDialogComponent>
  ) {}
  // dataSource: MatTableDataSource<FavouriteModel>;
  //
  isCustomerAdd = false;
  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.Griddata);
  }
  displayedColumns: string[] = [
    'customerName',
    'customerEmail',
    'group',
    'lastContacted',
    'priority',
    'isAuthorized',
    'view',
  ];
  dataSource = ELEMENT_DATA;
  showCustomerDetails(element: any) {
    console.log(element);
  }
  addCustomer() {
    this.isCustomerAdd = true;
  }
  showCustomerList() {
    this.isCustomerAdd = false;
  }
}
