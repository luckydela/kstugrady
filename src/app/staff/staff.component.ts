import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  usr={
    unm:'',
    pwd:''
  }
  rd = []
  disable:boolean = false
  constructor(private router: Router, private ssv: ServiceService) { }

  ngOnInit() {
  }

  stdlogin(){
    this.disable = true
    if(this.usr.unm === '' || this.usr.pwd === ''){
      this.disable = false
      this.ssv.dialog('Enter your username and password','Error')
    } else {
      this.ssv.staff(this.usr)
      .subscribe(rd => {

        this.disable = false
        if(rd === null){
          this.ssv.dialog('We could not find the user :: '+this.usr.unm,'Error')
        } else {
          localStorage.setItem('ud',JSON.stringify(rd))
          localStorage.setItem('isLoggedInStatus', JSON.stringify({'sts':true}));
          let role = rd[0].role === 'plan' ? 'plancm' : 'findpt'
          this.router.navigate(['layout/'+role]);
        }
      },err => {
        this.disable = false
        // this.router.navigate(['layout/stdprofile']);
      })

    }
  }
  attendace(){

  }
  print(){

  }

}
