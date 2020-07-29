import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-activity-task',
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.scss'],
})
export class ActivityTaskComponent implements OnInit {
  constructor(private dialogService: DialogService) {}
  NewTaskDummyArray = [];

  ngOnInit(): void {
    this.NewTaskDummyArray = [
      {
        taskHeader: 'Upcoming and Overdue',
        taskHeaderId: 1,
        taskContent: [
          {
            taskID: 1,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 20',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 20',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 20',
            priority: 3,
          },
        ],
      },
      {
        taskHeader: 'Oct - 2017',
        taskHeaderId: 2,
        oldData: true,
        taskContent: [
          {
            taskID: 1,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 1,
          },
          {
            taskID: 2,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 2,
          },
          {
            taskID: 3,
            taskName: 'New Product persentation',
            description: 'You have an upcoming events with Stuart Broad',
            date: 'Aug 17',
            priority: 3,
          },
        ],
      },
    ];
  }
  selectedIndex = -1;
  setIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = index;
    }
  }
  getClass(i: number) {
    if (i === 1) {
      return 'p-1';
    } else if (i === 2) {
      return 'p-2';
    } else {
      return 'p-3';
    }
  }
  openPaymentTaskDialog() {
    this.dialogService.openPayementTask('').subscribe((res) => {});
  }
}
