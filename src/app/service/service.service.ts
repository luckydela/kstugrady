import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // devurl:any = 'http://kstugraduate.loc/svs/';
  devurl:any = 'http://172.16.7.16/svs/';
  isLoggedInStatus:any;
  rd:Array<any>

   private httpHeaders = new HttpHeaders()
   .set("Access-Control-Allow-Origin", "http://localhost:4200")
   .set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Access-Control-Allow-Headers", "Origin, Content-Type, Cookies")
   .set("Content-Type", "application/x-www-form-urlencoded");
   
   private options = {
    headers: this.httpHeaders
   };

  constructor( private http: HttpClient) {
 
  }

   get isLoggedIn(){
    this.isLoggedInStatus = localStorage.isLoggedInStatus
    if(!this.isLoggedInStatus){
      return false
    } else {
      return true
    }
  }

  start(){
    let fm = new HttpParams()
    .set("s","start")
    .set("f","app")

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  login(ud:any){
    let fm = new HttpParams()
    .set("studentno",ud.studentno)
    .set("indexno",ud.indexno)
    .set("f","login")
    .set("m","auth")

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  staff(ud:any){
    let fm = new HttpParams()
    .set('unm',ud.unm)
    .set('pwd',ud.pwd)
    .set('f','login')
    .set('m','staff')

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  
  payment(ud:any){
    let fm = new HttpParams()
    .set("studentno",ud.studentno)
    .set("f","payment")
    .set("m","send")

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  confirmpayment(ud:any,rcptno:any){
    let fm = new HttpParams()
    .set("studentno",ud.studentno)
    .set("rcptno",rcptno)
    .set("f","payment")
    .set("m","confirm")

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  confirmattendance(ud:any){
    let fm = new HttpParams()
    .set("studentno",ud.studentno)
    .set("f","payment")
    .set("m","attendance")

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  fetchdata(studentno:any){
    let fm = new HttpParams()
    .set('studentno',studentno)
    .set('f','login')
    .set('m','search')

    return this.http.post<Array<any>>(this.devurl,fm,this.options)
  }
  dialog(msg:any,title:any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    return swalWithBootstrapButtons.fire({
      title: title,
      text: msg,
      // showCancelButton: true,
      // confirmButtonText: 'Confirm Paymnet',
      // cancelButtonText: 'OK',
      reverseButtons: true
    })
    // .then((result) => {
    //   if (result.value) {
    //     swalWithBootstrapButtons.fire(
    //       'Payment Successful!',
    //       'Your payment has been successful.. proceed to register and print graduation letter.',
    //       'success'
    //     )
    //   } else (
    //     /* Read more about handling dismissals below */
    //     result.dismiss === swal.DismissReason.cancel
    //   )
    // })
  }  
}






