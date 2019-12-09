import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-confirmattendance',
  templateUrl: './confirmattendance.html',
  styleUrls: ['./confirmattendance.css']
})
export class ConfirmattendanceComponent implements OnInit {
  userdata:any;
  disable:boolean = false
  btntext:string = 'Confirm Attendance'
  constructor(private router: Router, private ssv:ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('ud'))[0];
  }

  confirm(){
    this.disable = true
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    

    swalWithBootstrapButtons.fire({
      title: 'Attendance',
      text: "After this stage you cannot undo your action. Are you sure you want to proceed? ",
      showCancelButton: true,
      confirmButtonText: 'Yes, Proceed',
      cancelButtonText: 'No, Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.btntext = 'Processing ...'
        this.ssv.confirmattendance(this.userdata)
        .subscribe(rd => {
          this.disable = false
          this.btntext = 'Confirm Attendance'
          if(rd === null){
            this.ssv.dialog('::You cannot attend the graduation::','Error')
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
