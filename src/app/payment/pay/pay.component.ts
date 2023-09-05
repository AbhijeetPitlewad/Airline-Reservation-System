import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from '../Payment';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  payForm:any;
  flight:any;
  departureDate:any;
  classType: any = "None";
  // payment:any;
  res:any;
  paymentId:any;
  generatedTicket:any;
  a:any;
  alertWithSuccess(){
    Swal.fire("Payment Successfull", "  ", "success");
  }

  constructor(private paymentService:PaymentService , private fb: FormBuilder,private flightService:FlightService,private router:Router,private ticketService:TicketService) {
    // this.departureDate=sessionStorage.getItem("departureDate")
   }

  ngOnInit(): void {
    this.payForm = this.fb.group({      

      classType: ['', Validators.required] ,
      seatNumber:['', Validators.required]  ,    
      // paymentId:  ['', Validators.required]           
  
    });


    this.searchFlightByFlightNumber(Number(sessionStorage.getItem("selectedFlightNumber")));
    
    this.departureDate=sessionStorage.getItem("departureDate")
  }


  searchFlightByFlightNumber(flightNumber:number){
    this.flightService.searchFlightByFlightNumber(flightNumber).subscribe(data=> this.flight=data);
}

  doPayment(){
      
      var amount:number;
      // var id:number;
      var pDate:String;
      

      // id=this.paymentId ;

      if(this.classType=="Economy"){
        amount=this.flight.esPrice;
      }
      else{
        amount=this.flight.bsPrice;
      }
      
      // pDate=Date.now().toString();
      // pDate=this.datepipe.transform(Date.now(), 'yyyy/MM/dd').toString();
      var timplapse=Date.now()
      var today=new Date(timplapse);
      pDate=today.toLocaleDateString();
      var payment={
          // "paymentId":id,
          "amount":amount,
          "paymentDate": pDate
      }
      this.paymentService.doPayment(payment).subscribe(data=>{
        this.res=data;
        sessionStorage.setItem("paymenId",this.res.paymentId);
        sessionStorage.setItem("classType",this.classType);
        sessionStorage.setItem("seatNumber", this.payForm.value.seatNumber);
        //alert("Payment SuccessFul")
        //this.a=sessionStorage.getItem("generatedTicket")
        this.alertWithSuccess();
        console.log(this.res);

        let ticket=
      {
        // ticketNumber: 0,
        
        flight: {
          flightNumber:Number(sessionStorage.getItem("selectedFlightNumber"))
        },
        user: {userEmail: sessionStorage.getItem("userEmail")},
        classType: sessionStorage.getItem("classType"),
        seatNumber:sessionStorage.getItem("seatNumber"),
        status:"Booked",
        flightDate:sessionStorage.getItem("departureDate"),
        payment:{ paymentId: sessionStorage.getItem("paymenId")}


      };

        this.bookedTicket(ticket);
        this.router.navigate(['user/search-flight/payment/generated-ticket']);
      });
      
  }


  bookedTicket(ticket:any){
    console.log("-----"+ticket);
    this.ticketService.bookedTicket(ticket).subscribe(data=>{
      this.generatedTicket=data;
      console.log("-----"+this.generatedTicket);
      console.log(this.generatedTicket);
      sessionStorage.setItem("generatedTicket",JSON.stringify(this.generatedTicket.ticketNumber));
      // this.g= sessionStorage.getItem("generatedTicket");

    });
   
}

}
