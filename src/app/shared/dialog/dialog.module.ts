import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { CustomerInvoiceDialogComponent } from './customer-invoice-dialog/customer-invoice-dialog.component';
import { LogCallDialogComponent } from './log-call-dialog/log-call-dialog.component';
import { FormsModule } from '@angular/forms';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { PaymentActivityDialogComponent } from './payment-activity-dialog/payment-activity-dialog.component';
import { CustomerListDialogComponent } from './customer-list-dialog/customer-list-dialog.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { AddDisputeComponent } from './add-dispute/add-dispute.component';

@NgModule({
  declarations: [
    NewTaskDialogComponent,
    CustomerInvoiceDialogComponent,
    LogCallDialogComponent,
    NewEventDialogComponent,
    TaskDialogComponent,
    PaymentActivityDialogComponent,
    CustomerListDialogComponent,
    AddCustomerDialogComponent,
    AddDisputeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    NewTaskDialogComponent,
    CustomerInvoiceDialogComponent,
    LogCallDialogComponent,
    NewEventDialogComponent,
    PaymentActivityDialogComponent,
    CustomerListDialogComponent,
    AddCustomerDialogComponent,
    AddDisputeComponent
  ],
})
export class DialogModule {}
