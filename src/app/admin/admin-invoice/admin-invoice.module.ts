import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminInvoiceRoutingModule } from './admin-invoice-routing.module';
import { AdminInvoiceComponent } from './admin-invoice.component';


@NgModule({
  declarations: [AdminInvoiceComponent],
  imports: [
    CommonModule,
    AdminInvoiceRoutingModule
  ]
})
export class AdminInvoiceModule { }
