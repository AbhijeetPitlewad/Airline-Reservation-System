import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import Swal from 'sweetalert2';
import { user } from '../user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userForm: any;
  userLoginObj: user = new user;
  a!: any;
  alertWithSuccess(){
    Swal.fire("Logged in Successfully ", " Welcome "+this.a, "success");
  }
  alertWithFailure(){
    Swal.fire("Invalid Username or password", "Enter Again", "error");
  }
  constructor(private router : Router , private userService:UserLoginService,private fb:FormBuilder) { }

    ngOnInit(): void {
      this.userForm=this.fb.group({
        userEmail:['',Validators.required],										
        userPassword:['',Validators.required],
        //userFirstName:['',Validators.required]   
    });
  }
  
  public userLogin()
  {
    //console.log(this.userForm.value);
    this.userService.userLogin(this.userForm.value).subscribe(data=>
  
  
      {this.userLoginObj=data;    
        console.log(this.userLoginObj);
        if(this.userForm.value.userPassword==this.userLoginObj.userPassword)
        {
          sessionStorage.setItem('userFirstName',this.userLoginObj.userFirstName.toString())
          //sessionStorage.setItem('userFirstName',this.userLoginObj.userFirstName.toString())
          sessionStorage.setItem('userEmail',this.userLoginObj.userEmail.toString());
          this.a = sessionStorage.getItem('userFirstName') || null;
          this.alertWithSuccess();
          this.router.navigate(['user/user-dashboard']);
        }
        else{
          this.alertWithFailure()
        }
      },error=> 
      this.alertWithFailure()
      );  
  }


    userSignUpNavigate(){
      this.router.navigate(['user/signup']);
    }


  }


