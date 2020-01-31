import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  atd:any = 0;
  ntd:any = 0;
  tot:any = 0;
  paid:any = 0;
  aloc:any = 0;
  showsearch:boolean = true;
  showlist:boolean = false;
  searchtext:string = 'Search';
  savetext:string = 'Save';
  studentno:any='';
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
  gown:any;
  gownstate:any;

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
        this.aloc = rd[0]['aloc']
    },err => {
      this.ssv.dialog(err,'Error')
    })
  }

  searchshow() {
    this.showsearch = true
    this.showlist = false;
  }

  list() {
    this.showlist = true;
    this.showsearch = false;
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
          this.gownstate = rd[0].gown === 0 ? 'GOWN NOT ALLOCATED' : 'GOWN ALLOCATED';
          this.studentno = ''
        }
      },err=>{
        this.disable = false;
        this.ssv.dialog(err,'Error')
        this.searchtext = 'Search'
      })
  }
  dataChanged($event){
    this.gown
  }
  close() {
    this.result = false;
    this.showsearch = true;
  }
  save() {
    if(this.gown === undefined) return this.ssv.dialog('Select Gown Allocation','Message');
    this.disable = true
    this.savetext = 'Processing ...'
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
    this.ssv.updategown(this.sno,this.gown,this.userdata)
      .subscribe(rd => {
        this.disable = false
        this.savetext = 'Search'
        if(rd === null){
          this.ssv.dialog('We could not find a student with studentno:: '+this.studentno,'Message')
        } else if(rd['error']) {
          this.ssv.dialog(rd['error'],'Error')
        } else {
          this.result = true;
          this.showsearch = false;
          this.user = rd[0];
          this.gownstate = rd[0].gown === 0 ? 'GOWN NOT ALLOCATED' : 'GOWN ALLOCATED';
          this.fetchparams()
        }
      },err=>{
        this.disable = false;
        this.ssv.dialog(err,'Error')
        this.savetext = 'Search'
      })
  }

}
