import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../flight/Flight';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseUrl:string="http://localhost:8282/flight/";

  constructor(private http: HttpClient) {   }

  addFlight(flight:any):Observable<any>{  
    const headers = { 'content-type': 'application/json'}   
    return this.http.post<any>(this.baseUrl,JSON.stringify(flight),{'headers':headers});
  }

  getAllFlights():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  searchFlightByFlightNumber(flightNumber:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+flightNumber);
  }

  deleteFlight(flightNumber:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+flightNumber);
  }
  //http://localhost:8282/flight/search?from=Mumbai&to=Pune
  searchFlights():Observable<any>{
    return this.http.get(this.baseUrl+"search?from="+sessionStorage.getItem("from")+"&to="+sessionStorage.getItem("to"));
  }
  
}
