import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from './service/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gradPort';


  constructor(private ssv: ServiceService, private router: Router){
    console.log(JSON.parse(localStorage.getItem('isLoggedInStatus')));
      
  }

  ngOnInit(){
    if(JSON.parse(localStorage.getItem('isLoggedInStatus')) === null){
      

    } else {
      if(JSON.parse(localStorage.getItem('isLoggedInStatus'))['sts']){
        this.router.navigate(['layout/stdprofile']);
      }
    }
    this.start()
  }
  

  start(){

    this.ssv.start()
    .subscribe(rd => {

    },err => {      
      this.ssv.dialog(err.message,err.name)
    })
  }
}
