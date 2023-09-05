import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from '../admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  baseUrl:string="http://localhost:8282/admin";
  constructor(private httpService:HttpClient) { }

  public adminLogin(admin:admin)
  {
    //console.log(this.httpService.get<admin>(this.baseUrl));
    return this.httpService.get<admin>(this.baseUrl+'/'+admin.adminUserName);    
  }
}
