import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  flightNumber:any;
  flight:any;
  deleted:boolean=false;
  a:any;
  alertWithSuccess(){
    Swal.fire("Flight Deleted Successfully ", " Flight Number : "+this.a, "success");
  }

  alertWithFailure(){
    Swal.fire("Flight Not Deleted", "Tickets already booked", "error");
  }
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }

  searchFlightByFlightNumber(flightNumber:number){
      this.flightService.searchFlightByFlightNumber(flightNumber).subscribe(data=> this.flight=data);
  }

  deleteFlight(flightNumber:number){
      this.flightService.deleteFlight(flightNumber).subscribe(data=> {this.deleted=data
        this.a=this.flightNumber;
        this.alertWithSuccess()
        this.flight=undefined;
      },error=> 
      this.alertWithFailure()
      //alert('Not deleted')
      );      
      //alert("Flight Number: "+flightNumber+" deleted Successfully.");      
      // this.deleted=false;

  }

}
