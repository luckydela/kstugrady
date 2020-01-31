import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-momopayoption',
  templateUrl: './momopayoption.component.html',
  styleUrls: ['./momopayoption.component.css']
})
export class MomopayoptionComponent implements OnInit {
  amount=360.50;
  userdata:any;
  disable:boolean = false
  btntext:string = 'Submit'
  constructor(private router: Router, private ssv:ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
  }

  makepayment(){

    this.disable = true
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    

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
        this.ssv.payment(this.userdata)
        .subscribe(rd => {
          this.disable = false
          this.btntext = 'Submit'
          // console.log(rd);
          
          if(rd['code'] === 600){
            this.ssv.dialog(rd['reason'],rd['status'])
          } else if(rd['code'] === 999){
            this.ssv.dialog(rd['description'],rd['status'])
          } else if(rd['code'] === 900){
            this.ssv.dialog(rd['reason'],'status')
          }else if(rd['code'] === 200){
            window.open(rd['checkout_url'])
          }else if(rd['error']){
            this.ssv.dialog(rd['error'],'Error')
          }
         
        },err=>{
          this.disable = false;
          this.ssv.dialog(err,'Error')
        })

      } else {
        result.dismiss === swal.DismissReason.cancel
        this.disable = false
      }
    }) 
  }

  bankverifypayment(){
    swal.fire(
      'Veriication Successful',
      '...Accept to register and print graduation letter',
      'success'
    )
    this.router.navigate(['stdprofile']);

  }

}
