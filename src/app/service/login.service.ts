import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'https://uat.ahyush.com/ahyush-services/auth/login';
  constructor(private http: HttpClient) { }

  loginServiceFun(loginInfo:any, customHeader){
    console.log(loginInfo);
    console.log(customHeader);
    return this.http.post(this.baseUrl, loginInfo, customHeader);
  }
}
