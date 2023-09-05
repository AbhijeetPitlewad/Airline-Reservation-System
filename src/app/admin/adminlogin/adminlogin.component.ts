import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import Swal from 'sweetalert2';
import { admin } from '../admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminForm: any;
  adminLoginObj: admin = new admin;
  a!: any;

  alertWithSuccess(){
    Swal.fire("Logged in Successfully ", " Welcome "+this.a, "success");
  }
  alertWithFailure(){
    Swal.fire("Invalid Username or password", "Enter Again", "error");
  }
  constructor(private router : Router , private adminService:AdminLoginService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.adminForm=this.fb.group({
      adminUserName:['',Validators.required],										
      adminPassword:['',Validators.required]
  });
}

public adminLogin()
{
  //console.log(this.adminForm.value);
  this.adminService.adminLogin(this.adminForm.value).subscribe(data=>


    {this.adminLoginObj=data;    
      console.log(this.adminLoginObj);
      if(this.adminForm.value.adminPassword==this.adminLoginObj.adminPassword)
      {
        sessionStorage.setItem('adminUserName',this.adminLoginObj.adminUserName.toString())
        this.a = sessionStorage.getItem('adminUserName') || null;
        this.alertWithSuccess();
        this.router.navigate(['admin/admin-dashboard']);
      }
      else
      {
        this.alertWithFailure();
      }
      // else{
      //   alert("Admin not found")
      // }
    },error=> 
    this.alertWithFailure()
    );  

}



}
