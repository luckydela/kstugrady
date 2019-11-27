import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PRIVILEDGES } from '../service/roles.mockup';
import swal from 'sweetalert2';


@Component({
  selector: 'app-lyt',
  templateUrl: './lyt.component.html',
  styleUrls: ['./lyt.component.css']
})
export class LytComponent implements OnInit {
  userdata = JSON.parse(localStorage.getItem('userdata'));

  menus:any = [];

  constructor(private router: Router) { 
    this.menus = PRIVILEDGES.filter((menu) => {
      // return menu.role === this.userdata.role;
    })  
  }

  ngOnInit() {
  }

  routefn(route:any){
    this.router.navigate([route])
  }

profile(){
  this.router.navigate(['layout/stdprofile']);
}
  logout(){
    
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'logout ?',
      text: "You are logging out...",
      showCancelButton: true,
      confirmButtonText: 'Yes Confirm',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
      


    window.localStorage.clear();
    this.router.navigate(['/login']);
        
      } else (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) 
      
    })
   
     
     
     
  }
}
