import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-momopayoption',
  templateUrl: './momopayoption.component.html',
  styleUrls: ['./momopayoption.component.css']
})
export class MomopayoptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makepayment(){
    
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Payment ?',
      text: "Are you sure you want to proceed..?",
      showCancelButton: true,
      confirmButtonText: 'Confirm Paymnet',
      cancelButtonText: 'No, Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Payment Successful!',
          'Your payment has been successful.. proceed to register and print graduation letter.',
          'success'
        )


    // window.localStorage.clear();
     this.router.navigate(['layout/stdprofile']);
        
      } else (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) 
      // {
      //   swalWithBootstrapButtons.fire(
      //     'Cancelled',
      //     'Still Keep me here',
      //     // 'error'
      //   )
      // }
    })
   
     
     
     
  }

  bankverifypayment(){
    swal.fire(
      'Veriication Successful',
      '...Accept to register and print graduation letter',
      'success'
    )
    this.router.navigate(['layout/stdprofile']);

  }

}
