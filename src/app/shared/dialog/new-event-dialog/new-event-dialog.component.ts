import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.scss'],
})
export class NewEventDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewEventDialogComponent>
  ) {}
  selectedItem: string = '';
  imageItemPath = 'assets/images1/account_120.png';

  selectedvalue: string;
  foods: Food[] = [
    { value: 'InProgress', viewValue: 'In Progress' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'tacos-2', viewValue: 'Tacos' },
    { value: 'tacos-3', viewValue: 'Tacos1' },
    { value: 'tacos-3', viewValue: 'Tacos2' },
  ];
  ngOnInit(): void {}
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 1 || date === 20 ? 'glbl-custom-date-class' : '';
  };
  selcetedItem(item: any, imageitem: any) {
    this.selectedItem = 'searching for ' + item;
    this.imageItemPath = imageitem;
  }
}
