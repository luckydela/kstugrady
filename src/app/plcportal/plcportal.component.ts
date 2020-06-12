import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-plcportal',
  templateUrl: './plcportal.component.html',
  styleUrls: ['./plcportal.component.css']
})
export class PlcportalComponent implements OnInit {
  atd:any = 0;
  ntd:any = 0;
  tot:any = 0;
  paid:any = 0;
  showsearch:boolean = true;
  showlist:boolean = false;
  vclass:boolean = false;
  searchtext:string = 'Search';
  sendtext:string = 'Send'
  studentno:any='';
  mobileno:any ='';
  disable:boolean = false;

  userdata;
  user;
  programme;
  paidstatus;
  attendancestatus;
  paymentstatus=0;
  confirmattendance;
  gender:string;
  mobile:any='';
  tel:any;

  firstname;
  lastname;
  indexno;
  sno;
  entryyear;
  exityear;
  department;
  faculty;
  result:boolean = false;

  constructor(private router: Router, private ssv:ServiceService) { }

  ngOnInit() {
    this.fetchparams()
  }

  fetchparams(){
    this.ssv.fetchdash('academic')
    .subscribe(rd => {
      
        this.tot = rd[0]['tot'];
        this.atd = rd[0]['atd'];
        this.ntd = rd[0]['ntd'];
        this.paid = rd[0]['paid'];
    },err => {
      this.ssv.dialog(err,'Error')
    })
  }

  searchshow() {
    this.showsearch = true
    this.showlist = false;
    this.vclass = false
  }

  list() {
    this.showlist = true;
    this.showsearch = false;
    this.vclass = false
  }
  vclassform() {
    this.showsearch = false
    this.showlist = false;
    this.vclass = true
  }


  search(){
    if(this.studentno === '') return this.ssv.dialog('Studentno field is required','Caution');
    
    this.disable = true
    this.searchtext = 'Processing ...'
    this.ssv.fetchdata(this.studentno)
      .subscribe(rd => {
        this.disable = false
        this.searchtext = 'Search'
        if(rd === null){
          this.ssv.dialog('We could not find a student with studentno:: '+this.studentno,'Message')
        } else if(rd['error']) {
          this.ssv.dialog(rd['error'],'Error')
        } else {
          this.result = true;
          this.showsearch = false;
          this.user = rd[0];
          this.gender = this.user.gender === 1 ? 'MALE' : 'FEMALE';
          this.firstname = this.user.firstname;
          this.lastname = this.user.lastname;
          this.sno = this.user.studentno;
          this.indexno = this.user.indexno;
          this.exityear = this.user.exityear;
          this.entryyear = this.user.entryyear;
          this.department = this.user.department;
          this.faculty = this.user.faculty;

          this.programme = rd[0].programme
          this.paidstatus = rd[0].paymentstatus === 2 ? 'GRADUATION PAYMENTS RECEIVED' : 'NO GRADUATION PAYMENTS RECEIVED';
          this.paymentstatus = rd[0].paymentstatus;
          this.attendancestatus = rd[0].attendancestatus === 1 ? 'ATTENDING' : 'NOT ATTENDING';
          this.mobile = rd[0].mobileno;
          this.tel = rd[0].mobileno;

          this.studentno = ''
        }
      },err=>{
        this.disable = false;
        this.ssv.dialog(err,'Error')
        this.searchtext = 'Search'
      })
  }
  close() {
    this.result = false;
    this.showsearch = true;
  }
  send(){
    if(this.studentno === '' || this.mobileno === '') return this.ssv.dialog('Studentno and mobileno fields is required','Caution');
    this.disable = true
    this.sendtext = 'Processing ...'
    this.ssv.sendsms({sno:this.studentno,mob:this.mobileno})
    .subscribe(rd => {
      
      this.disable = false
      this.sendtext = 'Send'
      if(rd === null ) return  this.ssv.dialog(`Message not sent for ${this.studentno}. You didnot register last semester`,'Error');

      if(rd[0] === '1701'){
        this.ssv.dialog(`Message sent to ${rd[1]} with id: ${rd[2]}`,'Success');
        this.studentno = ''
        this.mobileno = ''
      }
      else {
        this.ssv.dialog(`Message not sent`,'Error');
      }
    },err => console.log(err));
    
  }

}
