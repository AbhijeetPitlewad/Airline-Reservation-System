import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  baseUrl = "http://localhost:8282/payment/";
  constructor(private http: HttpClient) { }

  doPayment(payment:any)
  {
    const headers = { 'content-type': 'application/json'}   
    
    return this.http.post<any>(this.baseUrl,JSON.stringify(payment),{'headers':headers});
  }

}
