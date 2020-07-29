import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RemindersActionComponent } from './reminders-action/reminders-action.component';
import { NotesFilesComponent } from './notes-files/notes-files.component';
import { DisputesComponent } from './disputes/disputes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    CustomerComponent,
    OverviewComponent,
    DetailsComponent,
    InvoicesComponent,
    RemindersActionComponent,
    NotesFilesComponent,
    DisputesComponent,
    CustomerDashboardComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule,SharedModule],
})
export class CustomerModule {
  debugger;
}
