import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerDetailsModel } from 'src/app/features/customer/customermodel/getcustomerdetails';
import { CustomerDisputeModel } from 'src/app/features/customer/customermodel/customer-dispute.model';

@Component({
  selector: 'app-add-dispute',
  templateUrl: './add-dispute.component.html',
  styleUrls: ['./add-dispute.component.scss'],
})
export class AddDisputeComponent implements OnInit {
  planModel: any = { start_time: new Date() };
  disputeForm: FormGroup;
  submitted = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDisputeComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.disputeForm = this.formBuilder.group({
      subject: ['', Validators.required],
      date: ['', Validators.required],
      name: ['', [Validators.required]],
      contactName: ['', [Validators.required]],
      Owner: ['', [Validators.required]],
    });
  }

  get f() {
    return this.disputeForm.controls;
  }
  dateChanged(evt) {
    let selectedDate = new Date(evt);
    console.log('by default:', selectedDate);
    console.log('by UTCString:', selectedDate.toUTCString());
    console.log('by LocaleString:', selectedDate.toLocaleString());
    console.log('by LocaleTimeString:', selectedDate.toLocaleTimeString());
  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.disputeForm.invalid) {
      return;
    }
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    let newDisputeAddObj = new CustomerDisputeModel();
    // subject: ['', Validators.required],
    // date: ['', Validators.required],
    // name: ['', [Validators.required]],
    // contactName: ['', [Validators.required]],
    // Owner:
    newDisputeAddObj.Subject = this.disputeForm.value.subject;
    newDisputeAddObj.ContactName = this.disputeForm.value.contactName;
    newDisputeAddObj.LastActivity = this.disputeForm.value.date.toLocaleString();
    newDisputeAddObj.Priority = 'normal';
    newDisputeAddObj.Owner = this.disputeForm.value.Owner;
    newDisputeAddObj.CustomerId = customer.CustomerId;
    // newDisputeAddObj.Subject = this.disputeForm.value.subject;

    this.dialogRef.close(newDisputeAddObj);
  }
}
