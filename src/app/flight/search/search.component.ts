import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFlightForm:any;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.searchFlightForm = this.fb.group({      

      from: ['', Validators.required],                    
  
      to: ['', Validators.required]    ,
  
      departureDate: ['', Validators.required], 
  });

}

searchFlightsList(){
    sessionStorage.setItem("from",this.searchFlightForm.value.from);
    sessionStorage.setItem("to",this.searchFlightForm.value.to);
    sessionStorage.setItem("departureDate",this.searchFlightForm.value.departureDate);
    this.router.navigate(["user/search-flight/flight-list"]);
}

}

