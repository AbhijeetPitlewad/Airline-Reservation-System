import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlighttComponent } from './flight/add-flightt/add-flightt.component';
import { GetAllFlightsComponent } from './flight/get-all-flights/get-all-flights.component';
import { DeleteFlightComponent } from './flight/delete-flight/delete-flight.component';
import { SearchComponent } from './flight/search/search.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';
import { PayComponent } from './payment/pay/pay.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BookedTicketComponent } from './ticket/booked-ticket/booked-ticket.component';
import { TicketHistoryComponent } from './ticket/ticket-history/ticket-history.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFlighttComponent,
    GetAllFlightsComponent,
    DeleteFlightComponent,
    SearchComponent,
    FlightListComponent,
    PayComponent,
    UserloginComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    UserregisterComponent,
    HomeComponent,
    HeaderComponent,
    BookedTicketComponent,
    TicketHistoryComponent,
    ContactusComponent,
    AboutusComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
