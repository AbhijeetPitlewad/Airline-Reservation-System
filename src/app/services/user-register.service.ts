import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user/user';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  baseUrl:string="http://localhost:8282/user/";

  constructor(private httpService:HttpClient) { }

    userRegister(user:any):Observable<any>{  
      const headers = { 'content-type': 'application/json'}   
      return this.httpService.post<any>(this.baseUrl,JSON.stringify(user),{'headers':headers});
    }
}
