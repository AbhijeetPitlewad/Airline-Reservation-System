import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { TicketService } from 'src/app/services/ticket.service';
import Swal from 'sweetalert2';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-booked-ticket',
  templateUrl: './booked-ticket.component.html',
  styleUrls: ['./booked-ticket.component.css']
})
export class BookedTicketComponent implements OnInit {

  alertWithSuccess(){
    Swal.fire("Thank you !!!", "  ", "success");
  }

  ticketNumber:any;
  ticket:any;
  clicked:boolean=false;
  constructor(private router:Router,private ticketService:TicketService) {
    
     }
  
  ngOnInit(): void {

    // this.ticketNumber=sessionStorage.getItem("generatedTicket");
    // this.showTicket(this.ticketNumber);
    
}


  showTicket(ticketNumber:any){
    this.ticketService.showTicket(ticketNumber).subscribe(data => {
      this.ticket=data;
      console.log(this.ticket);
    });
  }

  navigateToHome(){
      sessionStorage.clear();
      this.alertWithSuccess()
      this.router.navigate(['']);

  }

  showTicketDetails(){
    this.ticketNumber=sessionStorage.getItem("generatedTicket");
    this.clicked=true;
    this.showTicket(this.ticketNumber);
  }
  

}
