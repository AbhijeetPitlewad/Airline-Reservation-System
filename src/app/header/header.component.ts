import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string = 'default';
  // userName:string='';
  // adminName:string='';
  // userStorage:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(sessionStorage.getItem('adminUserName'))
        {
          this.menuType="admin"
          // if(sessionStorage.getItem('adminUserName'))
          // {
          //   let adminStorage=sessionStorage.getItem('adminUserName')
          //   let adminData=adminStorage && JSON.parse(adminStorage);
          //   this.adminName=adminData.adminUserName;
          // }
        }

        else if(sessionStorage.getItem('userFirstName'))
        {
          this.menuType="user"
          // if(sessionStorage.getItem('userFirstName'))
          // {
          //   let userStorage=sessionStorage.getItem('userFirstName')
          //    let userData=userStorage && JSON.parse(userStorage);
          //   this.userName=userData.userFirstName;
          // }
        }
        else
        {
          this.menuType='default'
        }
      }
    })
  }


  logout(){
    // sessionStorage.removeItem('adminUserName')
    // sessionStorage.removeItem('userFirstName')
    sessionStorage.clear();
    this.router.navigate([''])
  }


  loginSessionClear(){
    sessionStorage.clear()
  }
}
