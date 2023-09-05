import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from '../Flight';

@Component({
  selector: 'app-get-all-flights',
  templateUrl: './get-all-flights.component.html',
  styleUrls: ['./get-all-flights.component.css']
})
export class GetAllFlightsComponent implements OnInit {

  listofFlights:Flight[]=[];
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
      this.getAllFlights();
  }

  getAllFlights(){
    this.flightService.getAllFlights().subscribe(data => this.listofFlights=data);
  }

}
