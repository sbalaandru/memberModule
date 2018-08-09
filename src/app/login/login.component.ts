import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: Object;
  loginFormData: FormGroup;
  
  constructor(private fb: FormBuilder, private LoginService: LoginService) {
    this.loginForm();
  }
//For Build Form fields
  loginForm() {
    this.loginFormData = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [true],
      timeZone: ['IST']
    });
  }

  submitLoginForm() {
    const header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',      
      'Access-Control-Allow-Origin': '*'
      };
      const httpOptions = new HttpHeaders(header);
    console.log(this.loginFormData.value);
    this.LoginService.loginServiceFun(this.loginFormData.value, {headers : httpOptions})
    .subscribe(data=>{this.loginData = data});
  }

  ngOnInit() {
  }


}
