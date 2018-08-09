import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserApiService } from "../service/user-api.service";
import {Member} from "../model/member.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  members : any;
  constructor(private router: Router, private UserApiService: UserApiService) { }

  ngOnInit() {
     this.UserApiService.getMember()
     .subscribe(data => {this.members = data;});
  }

}
