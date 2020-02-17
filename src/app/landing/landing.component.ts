import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private ssv: ServiceService) {

    
   }

  ngOnInit() {
  }

  getStarted(route:any){
    // if(route === 'login') return this.ssv.dialog('The system has been closed for graduation registration','Message')

      this.router.navigate([route])
  }

}
