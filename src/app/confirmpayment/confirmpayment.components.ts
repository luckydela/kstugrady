import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-confirmpayment',
  templateUrl: './confirmpayment.html',
  styleUrls: ['./confirmpayment.css']
})
export class ConfirmpaymentComponent implements OnInit {
  rcptno;
  userdata:any;
  disable:boolean = false
  btntext:string = 'Confirm'
  constructor(private router: Router, private ssv:ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
  }

  confirm(){
    // 92139229522
    this.disable = true
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
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
        this.ssv.confirmpayment(this.userdata,this.rcptno)
        .subscribe(rd => {
          this.disable = false
          this.btntext = 'Confirm'
          if(rd === null){
            this.ssv.dialog('::You have no payments for transno:'+this.rcptno+ '. Your action has been logged::','Error')
          } else if(rd['error']) {
            this.ssv.dialog(rd['error'],'Error')
          } else {
            this.router.navigate(['layout/stdprofile']);
          }
          
         
        },err=>{
          this.disable = false;
          this.btntext = 'Confirm'
          this.ssv.dialog(err,'Error')
        })

      } else {
        result.dismiss === swal.DismissReason.cancel
        this.disable = false
      }
    })
   
     
     
     
  }

}
