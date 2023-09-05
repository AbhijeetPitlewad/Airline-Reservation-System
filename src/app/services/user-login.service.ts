import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../user/user';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  baseUrl:string="http://localhost:8282/user";

  constructor(private httpService:HttpClient) {  }
    public userLogin(user:user)
  {
    //console.log(this.httpService.get<admin>(this.baseUrl));
    return this.httpService.get<user>(this.baseUrl+'/'+user.userEmail);    
  }
}
