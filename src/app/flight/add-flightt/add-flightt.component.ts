import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';
import { FormBuilder, Validators } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-flightt',
  templateUrl: './add-flightt.component.html',
  styleUrls: ['./add-flightt.component.css']
})
export class AddFlighttComponent implements OnInit {

  flightForm:any;
  flight:any;
  a:any;

  constructor(private flightService:FlightService,private fb:FormBuilder,private router:Router) { }
  
  ngOnInit(): void {

    this.flightForm = this.fb.group({      

      flightNumber: ['', Validators.required],                    
  
      flightName: ['', Validators.required]    ,
  
      flightFrom: ['', Validators.required], 
      
      flightTo: ['', Validators.required], 

      flightDeparture: ['', Validators.required], 

      flightArrival: ['', Validators.required], 

      flightDuration: ['', Validators.required], 

      numberOfEs: ['', Validators.required],
      
      numberOfBs: ['', Validators.required], 

      esPrice: ['', Validators.required], 

      bsPrice: ['', Validators.required], 

  
      });  
  }

  alertWithSuccess(){
    Swal.fire("Flight Added Successfully ", " Flight Number : "+this.a, "success");
  }
  alertWithFailure(){
    Swal.fire("Flight Already Present", "Enter different Flight Number", "error");
  }
  addFlight(){
    this.flightService.addFlight(this.flightForm.value).subscribe(data=> {this.flight=data
      this.a=this.flight.flightNumber;
      this.alertWithSuccess()
      this.router.navigate(['admin/admin-dashboard'])
      },
      error=> {this.alertWithFailure()}
      );
      this.flightForm.reset();
  }

  

}
