export class CustomerTaskModel {
  Subject: string;
  // RelateTo: string;
  AssignedTo: string;
  Status: string;
  CustomerId: string;
  Name: string;
  Id: number;
  AtDate: string;
}
export interface CustomerTaskRootModel {
  ResponseCode: number;
  ResponseMessage: string;
  taskList: CustomerTaskModel[];
}
