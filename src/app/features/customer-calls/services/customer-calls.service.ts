import { Injectable } from "@angular/core";
import { CallsDataSource } from "../data/calls-data-source";
import { ICallData as ICallData } from "../types/call-data";
import { StatusEnum } from "../types/status-enum";

@Injectable()
export class CallDataService {
  // return dataset
  public getCallList(): ICallData[] {
    return CallsDataSource;
  }
  
  // returns data to populate form on call-in-use view
  getCallData(id: number): ICallData {
    if (id > 0) {
      const call = this.getCallList().find(x => x.id == id);
      if (call) {
        return call;
      }
    }
    throw Error('Invalid id');
  }

  // update caller information
  updateCallData(callData: ICallData): boolean {
    if (callData.id > 0) {
      const index = this.getCallList().findIndex(x => x.id === callData.id);

      if (index > -1) {
        CallsDataSource[index].title = callData.title;
        CallsDataSource[index].firstName = callData.firstName;
        CallsDataSource[index].surname = callData.surname;
        CallsDataSource[index].mobile = callData.mobile;
        CallsDataSource[index].home = callData.home;

        return true;
      }
    }
    return false;
  }

  // update call status
  updateCallStatus(callId: number, callStatus: StatusEnum): boolean {
    if (callId > 0) {
      const index = this.getCallList().findIndex(x => x.id == callId);

      if (index > -1) {
        CallsDataSource[index].status = callStatus;
        return true;
      }
    }
    return false;
  }
}
