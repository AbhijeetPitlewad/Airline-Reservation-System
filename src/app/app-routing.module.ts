import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddFlighttComponent } from './flight/add-flightt/add-flightt.component';
import { DeleteFlightComponent } from './flight/delete-flight/delete-flight.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { GetAllFlightsComponent } from './flight/get-all-flights/get-all-flights.component';
import { SearchComponent } from './flight/search/search.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './payment/pay/pay.component';
import { BookedTicketComponent } from './ticket/booked-ticket/booked-ticket.component';
import { TicketHistoryComponent } from './ticket/ticket-history/ticket-history.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregisterComponent } from './user/userregister/userregister.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home",component : HomeComponent},
  {path: "admin", component: AdminloginComponent},
  {path: "admin/admin-dashboard", component: AdmindashboardComponent},
  {path: "admin/admin-dashboard/add-flight", component: AddFlighttComponent },
  {path: "admin/admin-dashboard/all-flights", component: GetAllFlightsComponent },
  {path: "admin/admin-dashboard/delete-flight", component: DeleteFlightComponent },
  {path: "admin/admin-dashboard/delete-flight", component: DeleteFlightComponent },
  {path: "user/login", component: UserloginComponent },
  {path: "user/signup", component: UserregisterComponent },
  {path: "user/user-dashboard", component: UserdashboardComponent },
  {path: "user/search-flight", component: SearchComponent },
  {path: "user/search-flight/flight-list", component: FlightListComponent },
  {path: "user/search-flight/payment", component: PayComponent },
  {path: 'user/search-flight/payment/generated-ticket', component: BookedTicketComponent},
  {path: 'user/ticket-history',component: TicketHistoryComponent},
  {path: 'aboutUs', component: AboutusComponent},
  {path: 'contactUs', component: ContactusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
