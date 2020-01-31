import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-finportal',
  templateUrl: './finportal.component.html',
  styleUrls: ['./finportal.component.css']
})
export class FinportalComponent implements OnInit {
  disable:boolean = false;
  btntext:string = 'Submit';
  searchtext:string = 'Search';
  studentno:any='';
  sagecode:any ='';

  momo:any;
  bank:any;
  cash:any;
  userdata:any;

  constructor(private router: Router, private ssv:ServiceService) { }

  ngOnInit() {
    this.fetchparams()
  }

  fetchparams(){
    this.ssv.fetchdash('dashboard')
    .subscribe(rd => {
        this.cash = rd[0]['csh'];
        this.bank = rd[0]['bnk'];
        this.momo = rd[0]['mmo'];
    },err => {
      this.ssv.dialog(err,'Error')
    })
  }
  makepayment(){
    if(this.studentno === '' || this.sagecode === '') return this.ssv.dialog('All fields are required','Caution');
    this.disable = true
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];

    swalWithBootstrapButtons.fire({
      title: 'Payment ?',
      text: "Are you sure you want to proceed ?",
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed',
      cancelButtonText: 'No, Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.btntext = 'Processing ...'
        this.ssv.cashpayment(this.studentno,this.sagecode,this.userdata)
        .subscribe(rd => {
          this.disable = false
          this.btntext = 'Submit'
          if(rd === null){
            this.ssv.dialog('We could not find a student with studentno:: '+this.studentno,'Error')
            
          } else if(rd['error']) {
            this.ssv.dialog(rd['error'],'Error')
          } else {
            this.studentno='';
            this.sagecode = '';
            let msg = `Studentno:: ${rd[0]['studentno']}   
            TransactionId:: ${rd[0]['transno']}    Amount:: GHC ${rd[0]['amount']}`;
            this.fetchparams()
            this.ssv.dialog(msg,'Success');
          }
        },err=>{
          this.disable = false;
          this.ssv.dialog(err,'Error')
          this.btntext = 'Submit'
        })

      } else {
        result.dismiss === swal.DismissReason.cancel
        this.disable = false
      }
    }) 
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
            this.studentno = ''
          } else if(rd['error']) {
            this.ssv.dialog(rd['error'],'Error')
          } else {
            let msg = `We found the student ${rd[0]['studentno']}`;
            this.ssv.dialog(msg,'Success');
          }
        },err=>{
          this.disable = false;
          this.ssv.dialog(err,'Error')
          this.searchtext = 'Search'
        })

    
  }

}
