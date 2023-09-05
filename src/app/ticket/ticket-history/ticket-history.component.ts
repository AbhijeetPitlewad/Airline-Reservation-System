import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {
  ticketList: any;
  canceledticket: any;

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getTicketByUserEmail()
  }

  getTicketByUserEmail(){
    
    let userEmail = sessionStorage.getItem("userEmail");
    this.ticketService.getTicketByUserEmail(userEmail).subscribe(data =>{
      
      this.ticketList=data
      console.log(this.ticketList)
    })
  }

  cancelticket(ticketNumber:any)
  {
    this.ticketService.cancelticket(ticketNumber).subscribe(data=>{this.canceledticket=data
      this.getTicketByUserEmail()
    })
    
  }
}
