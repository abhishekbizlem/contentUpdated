import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  hideSideNav: boolean = true;
  isLogginPage = new BehaviorSubject(true);

  closeSideNav = new EventEmitter();

  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
