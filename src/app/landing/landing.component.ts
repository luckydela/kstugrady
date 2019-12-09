import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) {
    console.log('jkkk');
    
   }

  ngOnInit() {
  }

  getStarted(role:any){
    if(role === 'student'){
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/staff'])
    }
  }

}
