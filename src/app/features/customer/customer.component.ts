import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import * as Chart from 'chart.js';
import { UiService } from 'src/app/shared/ui.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CustomerService } from './customer.service';
import { HttpParams } from '@angular/common/http';
import { CustomerDetailsModel } from './customermodel/getcustomerdetails';
import { Observable } from 'rxjs';
import { CustomerTaskModel } from './customermodel/customertask.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @ViewChild('chartWrapper', { read: ElementRef }) chartWrapper: ElementRef;
  @ViewChild('userDetails', { read: ElementRef }) userDetails: ElementRef;
  @ViewChild('currencydetails', { read: ElementRef })
  currencydetails: ElementRef;
  constructor(
    private uiService: UiService,
    private dialgService: DialogService,
    private customerService: CustomerService
  ) {}

  customerDetails: CustomerDetailsModel;
  customerTaskDetails: Array<CustomerTaskModel>;

  canvas: any;
  ctx: any;

  ngOnInit(): void {
    // this.uiService.isLogginPage.emit(false);
    if (window.innerWidth > 1025) {
      this.view = [window.innerWidth / 2.95, 280];
      this.barPadding = '24';
    } else {
      this.view = [window.innerWidth / 2.1, 280];
      this.barPadding = '26';
    }
    this.getCustomerInformation();
  }

  ngAfterViewInit() {
    if (this.chartWrapper) {
      this.chartWrapper = this.chartWrapper.nativeElement.offsetWidth as any;
    }
    // this.userDetails = this.userDetails.nativeElement.offsetWidth;
    // this.currencydetails = this.currencydetails.nativeElement.offsetWidth;
  }

  getCustomerInformation() {
    //getCustomerInformation
    const customer = JSON.parse(localStorage.getItem('currentUser'));
    // let params = new HttpParams().set('customerId', customer.CustomerId);
    this.customerService
      .requestDataFromMultipleSources(customer.CustomerId)
      .subscribe((res) => {
        console.log(res);
        this.customerDetails = res[0];
      });

    // this.customerService.getCustomerInformation(customer.CustomerId).subscribe((res) => {
    //   this.customerDetails = res;
    // });
  }

  barChartData = [
    {
      name: 'JAN',
      value: 40632,
      extra: {
        code: 'jan',
      },
    },
    {
      name: 'FEB',
      value: 50000,
      extra: {
        code: 'feb',
      },
    },
    {
      name: 'MAR',
      value: 36745,
      extra: {
        code: 'mar',
      },
    },
    {
      name: 'APR',
      value: 36240,
      extra: {
        code: 'apr',
      },
    },
    {
      name: 'MAY',
      value: 33000,
      extra: {
        code: 'may',
      },
    },
    {
      name: 'JUN',
      value: 35600,
      extra: {
        code: 'jun',
      },
    },
    {
      name: 'JUL',
      value: 35800,
      extra: {
        code: 'july',
      },
    },
    {
      name: 'AUG',
      value: 25800,
      extra: {
        code: 'aug',
      },
    },
    {
      name: 'SEP',
      value: 30000,
      extra: {
        code: 'sep',
      },
    },
    {
      name: 'OCT',
      value: 32000,
      extra: {
        code: 'oct',
      },
    },
    {
      name: 'NOV',
      value: 30800,
      extra: {
        code: 'nov',
      },
    },
    {
      name: 'DEC',
      value: 40500,
      extra: {
        code: 'dec',
      },
    },
  ];

  view: any[] = [500, 200];
  barPadding = '26';

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  animations = true;
  xAxisLabel = '';
  showYAxisLabel = false;
  showDataLabel = false;
  yAxisLabel = '';

  colorScheme = {
    domain: [
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#ccc',
      '#4753fd',
      '#3ac43d',
      'coral',
    ],
  };

  onSelect(event) {
    console.log(event);
  }
  onResize(event, chartWrapper: any) {
    console.log(chartWrapper);
    if (window.innerWidth < 1024) {
      console.log('test', window.innerWidth - 20);
      this.view = [window.innerWidth - 30, 280];
      this.barPadding = '26';
    } else if (window.innerWidth == 1024) {
      this.view = [window.innerWidth / 2.35, 280];
      this.barPadding = '16';
    } else {
      this.view = [chartWrapper, 280];
      this.barPadding = '20';
    }
  }

  series = [
    {
      name: 'Retired',
      value: 20,
      label: '20%',
    },
    {
      name: 'Employed',
      value: 70,
      label: '70%',
    },
    {
      name: 'Unemployed',
      value: 10,
      label: '10%',
    },
  ];

  pieChartLabel(series: any[], name: string): string {
    const item = series.filter((data) => data.name === name);
    if (item.length > 0) {
      return item[0].label;
    }
    return name;
  }

  showCustomers() {
    this.dialgService.openCustomerList('').subscribe((res) => {});
  }
}
