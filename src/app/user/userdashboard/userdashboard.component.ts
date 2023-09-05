import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  ticketList: any;

  constructor(private router:Router,private ticketService:TicketService) { }

  ngOnInit(): void {
  }

  navigateToSearchTicket(){
    this.router.navigate(["user/search-flight"]);
  }

  navigateToTicketHistory(){

    // this.getTicketByUserEmail()
    this.router.navigate(["user/ticket-history"]);

  }

  // getTicketByUserEmail(){
    
  //   let userEmail = sessionStorage.getItem("userEmail");
  //   this.ticketService.getTicketByUserEmail(userEmail).subscribe(data =>{
      
  //     this.ticketList=data
  //     console.log(this.ticketList)
  //   })
  
  // }
}
