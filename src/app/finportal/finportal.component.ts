import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-finportal',
  templateUrl: './finportal.component.html',
  styleUrls: ['./finportal.component.css']
})
export class FinportalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reportgen(){
    swal.fire(
      'Generated Successfully',
      '...Report Generated Successfully',
      'success'
    )

  }

}
