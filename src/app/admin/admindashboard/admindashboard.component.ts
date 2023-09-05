import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToAddFlight(){
      this.router.navigate(["admin/admin-dashboard/add-flight"]);
  }

  navigateToDeleteFlight(){
    this.router.navigate(["admin/admin-dashboard/delete-flight"]);
  }

  navigateToAllFlights(){
    this.router.navigate(["admin/admin-dashboard/all-flights"]);
  }

}
