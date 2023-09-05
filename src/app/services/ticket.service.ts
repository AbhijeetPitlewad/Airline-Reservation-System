import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl:string="http://localhost:8282/ticket/"
  userEmail: string ="";
  constructor(private http: HttpClient) { }


  bookedTicket(ticket:any){
      
    const headers = { 'content-type': 'application/json'}   
    return this.http.post<any>(this.baseUrl,JSON.stringify(ticket),{'headers':headers});
  }

  showTicket(ticketNumber:any){
      
    return this.http.get<any>(this.baseUrl+ticketNumber);
  }
  getTicketByUserEmail(userEmail:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+"getTickets/"+userEmail)
  }

  cancelticket(ticketNumber:any){
    return this.http.put<any>(this.baseUrl+"cancelticket/"+ticketNumber,{});
  }
}
