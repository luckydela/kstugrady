import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usr={
    studentno:''
  }
  rd = []
  disable:boolean = false
  constructor(private router: Router, private ssv: ServiceService) { }

  ngOnInit() {
  }

  stdlogin(){
    this.disable = true
    swal.showLoading()
    if(this.usr.studentno === ''){
      this.disable = false
      swal.hideLoading()
      this.ssv.dialog('Enter your Student Number','Error')
    } else {
      this.ssv.login(this.usr)
      .subscribe(rd => {

        this.disable = false
        swal.hideLoading()
        if(rd === null){
          this.ssv.dialog('We could not find a student with studentno:: '+this.usr.studentno,'Error')
        } else if(rd['error']) {
          this.ssv.dialog(rd['error'],'Error')
        } else {
          localStorage.setItem('ud',JSON.stringify(rd))
          localStorage.setItem('isLoggedInStatus', JSON.stringify({'sts':true}));
          this.router.navigate(['layout/stdprofile']);
        }
      },err => {
        swal.hideLoading()
        this.disable = false
        this.ssv.dialog(err,'Error')
        // this.router.navigate(['layout/stdprofile']);
      })

    }
  }
  attendace(){

  }
  print(){

  }

}
