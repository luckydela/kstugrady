import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'

@Component({
  selector: 'app-plcportal',
  templateUrl: './plcportal.component.html',
  styleUrls: ['./plcportal.component.css']
})
export class PlcportalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reportgen(){
    swal.fire(
      ' Successful',
      '...Generated Successfully',
      'success'
    )
  }

}
