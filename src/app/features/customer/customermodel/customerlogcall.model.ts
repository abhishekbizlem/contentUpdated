export class CustomerLogACallModel {
  Id: number;
  Subject: string;
  Comments: string;
  Name: string;
  RelatedTo: string;
  AtDate: string;
  CustomerId: string;
}

// export interface CustomerLogCallListModel {
//   Id: number;
//   Subject: string;
//   Comments: string;
//   Name: string;
//   RelatedTo: string;
//   AtDate: string;
//   CustomerId: string;
// }

export class LogACallRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  CustomerLogCallList: CustomerLogACallModel[];
}
