import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Member } from '../model/member.model';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) { }
  baseUrl: string = "https://dev.ahyush.com/ahyush-services/group/planList?groupid=100000";

  getMember(){
    //return Observable.of(fakeUsers).delay(5000);
    return this.http.get<Member[]>(this.baseUrl);
  }
}
