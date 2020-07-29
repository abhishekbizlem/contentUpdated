import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { CustomerInvoiceDialogComponent } from './customer-invoice-dialog/customer-invoice-dialog.component';
import { LogCallDialogComponent } from './log-call-dialog/log-call-dialog.component';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { PaymentActivityDialogComponent } from './payment-activity-dialog/payment-activity-dialog.component';
import { CustomerListDialogComponent } from './customer-list-dialog/customer-list-dialog.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { CustomerTaskModel } from 'src/app/features/customer/customermodel/customertask.model';
import { DisputesComponent } from 'src/app/features/customer/disputes/disputes.component';
import { AddDisputeComponent } from './add-dispute/add-dispute.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openNewTask() {
    const d = this.dialog.open(NewTaskDialogComponent, {
      data: {},
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
  openlogCall() {
    const d = this.dialog.open(LogCallDialogComponent, {
      data: {
        // modeldata: modeldata,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
  openNewEvent(modeldata: any) {
    const d = this.dialog.open(NewEventDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '45vw',
    });

    return d.afterClosed();
  }
  openCustomerInvoice(modeldata: any) {
    const d = this.dialog.open(CustomerInvoiceDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
    });

    return d.afterClosed();
  }
  openTask(modeldata: CustomerTaskModel) {
    const d = this.dialog.open(TaskDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
    });

    return d.afterClosed();
  }
  openPayementTask(modeldata: any) {
    const d = this.dialog.open(PaymentActivityDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '55vw',
    });

    return d.afterClosed();
  }

  openCustomerList(modeldata: any) {
    const d = this.dialog.open(CustomerListDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
      minHeight: '65vh',
    });

    return d.afterClosed();
  }

  addCustomerList(modeldata: any) {
    const d = this.dialog.open(AddCustomerDialogComponent, {
      data: {
        modeldata: modeldata,
      },
      minWidth: '80vw',
      minHeight: '65vh',
    });

    return d.afterClosed();
  }

  openDispute() {
    const d = this.dialog.open(AddDisputeComponent, {
      data: {
        // modeldata: modeldata,
      },
      minWidth: '40vw',
    });

    return d.afterClosed();
  }
}
