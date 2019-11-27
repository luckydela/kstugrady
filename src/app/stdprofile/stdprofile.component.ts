import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-stdprofile',
  templateUrl: './stdprofile.component.html',
  styleUrls: ['./stdprofile.component.css']
})
export class StdprofileComponent implements OnInit {
userdata;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));

  }

  paymentoption(){
    this.router.navigate(['layout/makepayment'])
    
  }

}
