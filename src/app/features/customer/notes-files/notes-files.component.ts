import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  title: string;
  textpreview: string;
  createdBy: string;
  lastmodified: string;
  lastmodifiedby: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Test Note',
    textpreview: 'This is a test note',
    createdBy: 'GA',
    lastmodified: '7/1/2020 8:59 A.M',
    lastmodifiedby: 'GA'
  },
];
@Component({
  selector: 'app-notes-files',
  templateUrl: './notes-files.component.html',
  styleUrls: ['./notes-files.component.scss'],
})
export class NotesFilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'check',
    'title',
    'textpreview',
    'createdBy',
    'lastmodified',
    'lastmodifiedby',
    'view',
  ];
  dataSource = ELEMENT_DATA;
}
