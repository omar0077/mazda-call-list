import { CallTypeEnum } from "./call-type-enum";

// dataset model
export interface ICallData {
  id: number,
  title: string,
  firstName: string,
  surname: string,
  callType: CallTypeEnum,
  mobile: string,
  home: string,
  dateSold: Date;
  status: string;
}
