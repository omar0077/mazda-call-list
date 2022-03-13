import { CallTypeEnum } from "../types/call-type-enum";
import { ICallData as ICallData } from "../types/call-data";
import { StatusEnum } from "../types/status-enum";

const today = new Date();
// Dataset defination
export const CallsDataSource: ICallData[] = [
  {
    id: 1,
    title: 'Mr',
    firstName: 'Giacomo',
    surname: 'Guilizani',
    callType: CallTypeEnum.SALES,
    dateSold: new Date(new Date().setDate(today.getDate() - 1)),
    status: StatusEnum.NEW,
    mobile: '0415822587',
    home: '0315833222'
  },
  {
    id: 2,
    title: 'Mr',
    firstName: 'Patricio',
    surname: 'Roy',
    callType: CallTypeEnum.SALES,
    dateSold: new Date(new Date().setDate(today.getDate() - 1)),
    status: StatusEnum.INUSE,
    mobile: '0415822588',
    home: ''
  },
  {
    id: 3,
    title: 'Mr',
    firstName: 'Manah',
    surname: 'Edd',
    callType: CallTypeEnum.SERVICE,
    dateSold: new Date(new Date().setDate(today.getDate() - 2)),
    status: StatusEnum.COMPLETED,
    mobile: '0415822589',
    home: '0315833444'
  },
  {
    id: 4,
    title: 'Mr',
    firstName: 'Umer',
    surname: 'Saleem',
    callType: CallTypeEnum.SERVICE,
    dateSold: new Date(new Date().setDate(today.getDate() - 3)),
    status: StatusEnum.INUSE,
    mobile: '0415822600',
    home: ''
  },
  {
    id: 5,
    title: 'Mr',
    firstName: 'Ned',
    surname: 'Stark',
    callType: CallTypeEnum.SERVICE,
    dateSold: new Date(new Date().setDate(today.getDate() - 1)),
    status: StatusEnum.NEW,
    mobile: '0415822601',
    home: ''
  },
  {
    id: 6,
    title: 'Mr',
    firstName: 'Jason',
    surname: 'Bourne',
    callType: CallTypeEnum.SERVICE,
    dateSold: new Date(new Date().setDate(today.getDate() - 6)),
    status: StatusEnum.COMPLETED,
    mobile: '0415822602',
    home: ''
  },
  {
    id: 7,
    title: 'Mr',
    firstName: 'Rob',
    surname: 'Stark',
    callType: CallTypeEnum.SERVICE,
    dateSold: new Date(new Date().setDate(today.getDate() - 7)),
    status: StatusEnum.COMPLETED,
    mobile: '0415822603',
    home: ''
  }
];
