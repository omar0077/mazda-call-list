import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { ICallData } from '../../types/call-data';
import { CallTypeEnum } from '../../types/call-type-enum';
import { StatusEnum } from '../../types/status-enum';
import { IStatus } from '../../types/status';
import { ICallType } from '../../types/call-type';
import { CallDataService as CallDataService } from '../../services/customer-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.scss'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class CallListComponent implements OnInit {

  // objects defination and decelerations
  clickedRows = new Set<ICallData>(); // contain clicked rows
  public showErrorMessage = false; // error message
  selectedId: number = -1; // initialize selected id with temp value
  displayedColumns: string[] = ['name', 'dateSold', 'status']; // table heading elements
  originalDataSource: ICallData[] = []; // array contains orignal list of users
  dataSource: ICallData[] = []; // array that could be modified with users data
  
  // call type i.e sales and services
  callTypes: ICallType[] = [
    { key: CallTypeEnum.SALES, viewValue: 'SALES' },
    { key: CallTypeEnum.SERVICE, viewValue: 'SERVICE' }
  ];

  // status
  status: IStatus[] = [
    { key: StatusEnum.NEW, viewValue: 'New' },
    { key: StatusEnum.INUSE, viewValue: 'In Use' },
    { key: StatusEnum.COMPLETED, viewValue: 'Completed' }
  ];

  selectedCallType = this.callTypes[0].key;
  selectedStatus = this.status[0].key;
  // date object
  fromDate = new Date(); 
  toDate = new Date();

  // constructor with router and service object
  constructor(private _router: Router, private _callDataService: CallDataService) { }

  // set initail data
  ngOnInit(): void {
    this.originalDataSource = this._callDataService.getCallList();
    this.dataSource = this._callDataService.getCallList();;
  }

  // determine the status
  getStatusValue(key: string) {
    return this.status.find(e => e.key === key)?.viewValue;
  }

  // filter search and populate table with updated data source
  onSearchClick() {
    this.dataSource = this.originalDataSource.filter(e => e.callType == this.selectedCallType
      && e.dateSold >= this.fromDate && e.dateSold <= this.toDate
      && e.status == this.selectedStatus);
  }

  // row selection and highlight
  selectRow(row: ICallData) {
    this.selectedId = row.id;
    this.showErrorMessage = false;
    this.clickedRows.clear();
    this.clickedRows.add(row);
  }

  // navigate to call-in-use with clicked user
  editCaller() {
    if (this.selectedId != -1){
      this._router.navigateByUrl("/calls/"+this.selectedId);
    } else {
      this.showErrorMessage = true;
    }
  }

  onToDateChange(date: any, dateType: string) {
    if (dateType === 'fromDate') {
      this.fromDate = date.value
    }
    if (dateType === 'toDate') {
      this.toDate = date.value
    }
  }

  public closeAlert(): void {
    this.showErrorMessage = false;
  }
}












