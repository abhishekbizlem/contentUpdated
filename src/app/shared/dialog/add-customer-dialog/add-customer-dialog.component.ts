import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.scss'],
})
export class AddCustomerDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>
  ) {}

  ngOnInit(): void {}
}
