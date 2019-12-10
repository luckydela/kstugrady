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
  paymentstatus;
  confirmattendance;
  gender:string;
  constructor(private router: Router, private ssv: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
    this.ssv.fetchdata(this.userdata.studentno)
    .subscribe(rd => {
      if(rd === null){
        this.ssv.dialog('We could not find such a student','Error')
      } else {
        console.log(rd[0]);
        this.user = rd[0];
        this.gender = this.user.gender === 1 ? 'MALE' : 'FEMALE';
        this.programme = rd[0].programme
        this.paidstatus = rd[0].paymentstatus === 2 ? 'PAID' : 'UNPAID';
        this.paymentstatus = rd[0].paymentstatus;
        this.attendancestatus = rd[0].attendancestatus === 1 ? 'ATTENDING' : 'NOT ATTENDING';
        this.confirmattendance = rd[0].attendancestatus === 1 ? 'Reject Attendance' : 'Accept Attendance';
      }
    },err => {
      this.ssv.dialog(err,'Error')
    })
    
  }

  paymentoption(){
    this.router.navigate(['layout/makepayment'])
  }
  attendance(){
    this.router.navigate(['layout/confirmattendance'])
  }
  confirmpayment(){
    this.router.navigate(['layout/confirmpayment'])
  }
  print(){

  }
}
