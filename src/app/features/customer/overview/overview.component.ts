import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from '../customer.service';
import { CustomerTaskModel } from '../customermodel/customertask.model';
import { CustomerLogACallModel } from '../customermodel/customerlogcall.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  customerTaskDetails: Array<CustomerTaskModel>;
  CustomerLogACallList: Array<CustomerLogACallModel> = [];
  constructor(
    private dialogService: DialogService,
    private customerService: CustomerService
  ) {
    this.view = [150, 150];
  }
  NewTaskDummyArray = [
    {
      taskName: 'newTask',
      relatedTo: 'Test123',
      Date: 'Today',
      description: 'Related to Test123',
    },
    {
      taskName: 'Added Task',
      relatedTo: 'Test123',
      Date: 'Today',
      description: 'Related to Test123',
    },
  ];

  ngOnInit(): void {
    this.getTaskLists();
    this.getLoagACallList();
  }

  view: any[] = [150, 150];

  seriesOpt = [
    {
      name: 'Retired',
      value: 20,
      label: '20%',
    },
    {
      name: 'Employed',
      value: 70,
      label: '70%',
    },
    {
      name: 'Unemployed',
      value: 10,
      label: '10%',
    },
  ];

  pieChartLabelOpt(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  seriesPes = [
    {
      name: 'RetiredPes',
      value: 40,
      label: '40%',
    },
    {
      name: 'EmployedPes',
      value: 30,
      label: '20%',
    },
    {
      name: 'UnemployedPes',
      value: 60,
      label: '60%',
    },
  ];

  pieChartLabelPes(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  onResize(event) {
    console.log(event.target.innerWidth / 1.35);
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  //Dialog Related
  openNewtask() {
    this.dialogService.openNewTask().subscribe((res) => {
      console.log(res);
      if (res) {
        this.customerService
          .postCustomerTaskModel(res)
          .subscribe((taskresponse) => {
            console.log(taskresponse);
            this.customerTaskDetails = taskresponse.taskList;
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
            this.CustomerLogACallList.push(logresponse);
            console.log(this.CustomerLogACallList);
          });
      }
    });
  }
  openEvent() {
    this.dialogService.openNewEvent('').subscribe((res) => {});
  }

  selectedIndex = -1;
  subModule = false;
  current: number = 0;
  setIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  openTaskDialog(taskName: CustomerTaskModel) {
    this.dialogService.openTask(taskName).subscribe((res) => {
      if (res) {
        this.customerService
          .updateCustomerTask(res)
          .subscribe((updateTaskResponse) => {
            // console.log(updateTaskResponse);
            let updatedTaskIndex;
            updatedTaskIndex = this.customerTaskDetails.findIndex(
              (r) => r.Id === updateTaskResponse.task.Id
            );
            if (updatedTaskIndex > -1) {
              let taskList = updateTaskResponse.task;
              this.customerTaskDetails.splice(updatedTaskIndex, 1);
              this.customerTaskDetails.push(taskList);
              this.customerTaskDetails.sort((n1, n2) => n1.Id - n2.Id);
            }

            // return {
            //   r.CustomerId: updateTaskResponse.task.CustomerId,
            //   items: group.nodes.map((node) => node.item),
            //   size: group.size,
            // };
          });
      }
    });
  }

  getTaskLists() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerTaskList(customer.CustomerId)
      .subscribe((res) => {
        console.log(res);
        this.customerTaskDetails = res.taskList;
        console.log(this.customerTaskDetails);
      });
  }
  getLoagACallList() {
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .getCustomerLogCallList(customer.CustomerId)
      .subscribe((res) => {
        console.log(res);
        this.CustomerLogACallList = res.CustomerLogCallList;
        console.log(this.CustomerLogACallList);
      });
  }
}
