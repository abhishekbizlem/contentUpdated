import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
export interface PeriodicElement {
  customerName: string;
  recievable: number;
  recieved: number;
  lastContacted: string;
  priority: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    customerName: 'Price Water Cooper',
    recievable: 6500,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 1,
  },
  {
    customerName: 'DND Real Estate',
    recievable: 8800,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 2,
  },
  {
    customerName: 'Apple Retail',
    recievable: 10000,
    recieved: 50000.0,
    lastContacted: '30 mins ago via email',
    priority: 3,
  },
];
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'check',
    'customerName',
    'recievable',
    'recieved',
    'outstanding',
    'lastContacted',
    'priority',
    'icon',
    'view',
  ];
  dataSource = ELEMENT_DATA;

  openInvoiceDetails(element: any) {
    // this.dialogService.openCustomerInvoice(element).subscribe((res) => {});
  }
}
