import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstantService } from 'src/app/core-services/global-constant.service';
import { catchError } from 'rxjs/operators';
import { BaseAuthGuardService } from 'src/app/core-services/auth/base-auth-guard.service';
import {
  CustomerTaskModel,
  CustomerTaskRootModel,
} from './customermodel/customertask.model';
import { Observable, forkJoin } from 'rxjs';
import { TaskModel, TaskRootModel } from './customermodel/updatetaskmodel';
import {
  CustomerLogACallModel,
  LogACallRootModel,
} from './customermodel/customerlogcall.model';
import { CustomerDisputeModel } from './customermodel/customer-dispute.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(
    private http: HttpClient,
    private globalConstants: GlobalConstantService,
    private baseAuthSercvice: BaseAuthGuardService
  ) {}
  public getCustomerInformation(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<any>(this.globalConstants.getCustomerInfo, params)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //CustomerTaskModel
  public postCustomerTaskModel(data: CustomerTaskModel) {
    return this.http
      .post<CustomerTaskRootModel>(
        this.globalConstants.postAddCustomerTask,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerTaskList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<CustomerTaskRootModel>(
        this.globalConstants.getCustomerTaskList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public updateCustomerTask(data: TaskModel) {
    return this.http
      .post<TaskRootModel>(this.globalConstants.updateCustomerTask, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public requestDataFromMultipleSources(customerId: string): Observable<any[]> {
    let response1 = this.getCustomerInformation(customerId);
    // let response2 = this.getCustomerTaskList(customerId);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1]);
  }

  //Customer Log A CAll
  public createCustomerLogCall(data: CustomerLogACallModel) {
    return this.http
      .post<CustomerLogACallModel>(
        this.globalConstants.createCustomerLogCall,
        data
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  public getCustomerLogCallList(customerId: any) {
    let params = new HttpParams().set('customerId', customerId);
    return this.http
      .post<LogACallRootModel>(
        this.globalConstants.getCustomerLogCallList,
        params
      )
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }

  //addDisputeList
  public addDisputeList(data: CustomerDisputeModel) {
    return this.http
      .post<CustomerDisputeModel>(this.globalConstants.addDisputeList, data)
      .pipe(catchError(this.baseAuthSercvice.handleError));
  }
}
