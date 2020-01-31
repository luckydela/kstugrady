import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ServiceService } from "../service/service.service";

@Component({
  selector: 'app-stdprofile',
  templateUrl: './stdprofile.component.html',
  styleUrls: ['./stdprofile.component.css']
})
export class StdprofileComponent implements OnInit {
  userdata;
  user;
  programme;
  paidstatus;
  attendancestatus;
  paymentstatus=0;
  confirmattendance = 'Attendance Registration is Closed!!!';
  gender:string;
  mobile:any='';
  tel:any;
  // users={fnm:'Allen',lnm:'Eben'}
  constructor(private router: Router, private ssv: ServiceService) { }

  ngOnInit() {
  
    this.init()
  }

  init(){
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
    this.ssv.fetchdata(this.userdata.studentno)
    .subscribe(rd => {
      if(rd === null){
        this.ssv.dialog('We could not find such a student','Error')
      } else {
        this.user = rd[0];
        this.gender = this.user.gender === 1 ? 'MALE' : 'FEMALE';
        this.programme = rd[0].programme
        this.paidstatus = rd[0].paymentstatus === 2 ? 'GRADUATION PAYMENTS RECEIVED' : 'NO GRADUATION PAYMENTS RECEIVED';
        this.paymentstatus = rd[0].paymentstatus;
        this.attendancestatus = rd[0].attendancestatus === 1 ? 'I WILL ATTEND THE GRADUATION' : 'I WILL NOT ATTEND THE GRADUATION';
        this.confirmattendance = rd[0].attendancestatus === 1 ? 'Update Graduation Attendance Status' : 'Update Graduation Attendance Status';
        this.mobile = rd[0].mobileno;
        this.tel = rd[0].mobileno;
      }
    },err => {
      this.ssv.dialog(err,'Error')
    })

  }

  paymentoption(){
    this.router.navigate(['makepayment'])
  }
  attendance(){
    if (this.tel === '') {
      this.ssv.dialog('Please provide your active mobile number before you can proceed','Caution')
    } else {
      this.userdata.mobileno = this.tel;
      localStorage.setItem('ud',JSON.stringify([this.userdata]))
      this.router.navigate(['confirmattendance'])
    }
  }
  confirmpayment(){
    this.router.navigate(['confirmpayment'])
  }
  print(){
    this.ssv.dialog('Print is currently not active','Notice');
  }
}
