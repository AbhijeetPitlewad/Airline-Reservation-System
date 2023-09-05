import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  listofFlights:any;
  constructor(private flightService:FlightService,private router:Router) { }

  ngOnInit(): void {

      this.flightService.searchFlights().subscribe(data=> this.listofFlights=data );
  }

  bookTicket( flightNumber:number){
    sessionStorage.setItem("selectedFlightNumber",flightNumber.toString());
    this.router.navigate(["user/search-flight/payment"]);
  }

}


