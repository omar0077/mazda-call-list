import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CallDataService } from '../../services/customer-calls.service';
import { CallTypeEnum } from '../../types/call-type-enum';
import { ICallData } from '../../types/call-data';
import { StatusEnum } from '../../types/status-enum';

@Component({
  selector: 'app-call-in-use',
  templateUrl: './call-in-use.component.html',
  styleUrls: ['./call-in-use.component.scss']
})
export class CallInUseComponent implements OnInit {
  // objects // variables 
  public showMessage = false;
  public showCallMessage = false;
  public callId: number | undefined;
  public callInUse?: ICallData = {
    id: 0,
    title: '',
    firstName: '',
    surname: '',
    callType: CallTypeEnum.SALES,
    mobile: '',
    home: '',
    dateSold: new Date(),
    status: ''
  };

  callInUseForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    surname: new FormControl(''),
    mobile: new FormControl(''),
    home: new FormControl(''),
  });

  // route, router and service object
  constructor(private _router: Router, private _route: ActivatedRoute, private _callDataService: CallDataService) {
    const sub = this._route.params.subscribe((params) => {
      if (isNaN(params['id'])) {
        this._router.navigate(['error']);
      }
      this.callId = params['id'];
    });
  }

  // fetch user and populate form against id carried in route from previous view i.e. call-list 
  ngOnInit(): void {
    if (this.callId) {
      this.callInUse = this._callDataService.getCallData(this.callId);
      this.reset();
    }
  }

  // update submit functionality
  public onSubmit(): void {
    if (this.callInUse) {
      this.callInUse.title = this.callInUseForm.value.title;
      this.callInUse.firstName = this.callInUseForm.value.firstName;
      this.callInUse.surname = this.callInUseForm.value.surname;
      this.callInUse.mobile = this.callInUseForm.value.mobile;
      this.callInUse.home = this.callInUseForm.value.home;

      if (this._callDataService.updateCallData(this.callInUse)) {
        this.showMessage = true;
      }
    }
  }

  // reset form with original values
  public reset(): void {
    if (this.callInUse) {
      this.callInUseForm.setValue({
        title: this.callInUse?.title,
        firstName: this.callInUse?.firstName,
        surname: this.callInUse?.surname,
        mobile: this.callInUse?.mobile,
        home: this.callInUse?.home,
      });
    }
  }

  // navigate to call-list view
  public callCompleted(): void {
    if (this.callId) {
      if (this._callDataService.updateCallStatus(this.callId, StatusEnum.COMPLETED)) {
        this._router.navigateByUrl("/calls");
      }
    }
  }

  // call to mobile phone
  public callMobilePhone() {
    if (this.callInUse?.mobile) {
      window.open('tel:' + this.callInUse?.mobile);
    } else {
      this.showCallMessage = true;
    }
  }

  // call to home phone
  public callHomePhone() {
    if (this.callInUse?.home) {
      window.open('tel:' + this.callInUse?.home);
    } else {
      this.showCallMessage = true;
    }
  }

  // close alerts
  public closeAlert(): void {
    this.showMessage = false;
    this.showCallMessage = false;
  }
}
