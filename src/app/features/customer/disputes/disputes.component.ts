import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from '../customer.service';
import { CustomerDisputeModel } from '../customermodel/customer-dispute.model';
export interface PeriodicElement {
  DisputeId: number;
  contactName: string;
  subject: string;
  priority: string;
  lastActivity: string;
  status: string;
  owner: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    DisputeId: 1100123,
    contactName: 'Geeta A',
    subject: 'This Customer is going to pay',
    priority: 'Medium',
    lastActivity: '7/1/2020 8:59 A.M',
    status: 'Opened',
    owner: 'GA',
  },
];
@Component({
  selector: 'app-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss'],
})
export class DisputesComponent implements OnInit {
  CustomerDisputeList: Array<CustomerDisputeModel> = [];

  constructor(
    private dialogService: DialogService,
    private customerService: CustomerService
  ) {}
  ngOnInit(): void {}
  displayedColumns: string[] = [
    'check',
    'DisputeId',
    'contactName',
    'subject',
    'priority',
    'lastActivity',
    'status',
    'owner',
    'view',
  ];
  dataSource = ELEMENT_DATA;

  deleteDispute(element: any) {
    console.log(element);
  }

  openDispute() {
    this.dialogService.openDispute().subscribe((res) => {
      if (res) {
        this.customerService
          .addDisputeList(res)
          .subscribe((disputeresponse) => {
            this.CustomerDisputeList.push(disputeresponse);
            console.log(this.CustomerDisputeList);
          });
      }
    });
  }
  openNewtask() {
    this.dialogService.openNewTask().subscribe((res) => {
      console.log(res);
      if (res) {
        this.customerService
          .postCustomerTaskModel(res)
          .subscribe((taskresponse) => {
            console.log(taskresponse);
          });
      }
    });
  }
  openLogCall() {
    this.dialogService.openlogCall().subscribe((res) => {
      console.log(res);
      if (res) {
        this.customerService
          .createCustomerLogCall(res)
          .subscribe((logresponse) => {
            console.log(logresponse);
          });
      }
    });
  }
}
