import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //live_Url:any= "https://localhost:8080/kstugrady-java/api";

  isLoggedInStatus:any;


   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   
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

  getLogin(){
  }

  






  
}






