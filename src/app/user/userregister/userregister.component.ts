import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/services/user-register.service';
import Swal from 'sweetalert2';
import { user } from '../user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  userRegisterForm: any;
  userRegisterObj: user = new user;
  a!: any;
  alertWithSuccess(){
    Swal.fire("User Registered successfully", " Welcome ", "success");
  }
  alertWithFailure(){
    Swal.fire("User email already registered", "Use different email", "error");
  }
  // alertWithSuccess(){
  //   Swal.fire("User Registered successfully",  "success");
  // }
  constructor(private router : Router , private userService:UserRegisterService,private fb:FormBuilder) { }


    ngOnInit(): void {
      this.userRegisterForm=this.fb.group({
        userEmail:['',Validators.required],		
        userTitle:['',Validators.required], 	
        userFirstName:['',Validators.required], 	
        userLastName:['',Validators.required], 						
        userDob:['',Validators.required], 
        userPassword:['',Validators.required],
        userPhone:['',Validators.required], 
        que:['',Validators.required],  
        ans:['',Validators.required],
    });
  }

  userRegister(){
    this.userService.userRegister(this.userRegisterForm.value).subscribe(data=> {this.userRegister=data
      this.alertWithSuccess();
      this.a = sessionStorage.getItem('adminUserName') || null;
      this.userRegisterForm.reset();
      this.router.navigate(['user/login'])
    },error=>this.alertWithFailure()
    );
}

}
