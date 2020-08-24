import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { DataService } from "../data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailinvalid: Boolean;
  passwordinvalid: Boolean;
  constructor(private routes: Router, private http: HttpClient, private data: DataService) { }
  mail: string;
  password: string;
  logindata: any = {};
  returndata: any = {};
  message: string;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.mail = "";
    this.password = "";
  }

  Validate() {
    event.preventDefault();
    var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    this.mail = (<HTMLInputElement>document.getElementById("email")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log(this.mail);
    console.log(this.password);
    if (!(<HTMLInputElement>document.getElementById("email")).value.match(mailformat)) {
      this.emailinvalid = true;
    }
    else {

      this.emailinvalid = false;
    }

    if (!((<HTMLInputElement>document.getElementById("password")).value == "")) {

      this.passwordinvalid = false;

    }
    else {
      this.passwordinvalid = true;
    }


    if (!this.emailinvalid && !this.passwordinvalid) {
      this.logindata = {
        email: this.mail,
        password: this.password
      }
      this.register(this.logindata).subscribe((logindata: any) => {
        this.logindata = logindata;
        localStorage.setItem('token', logindata.token)
        localStorage.setItem('userId', logindata.id)
        if (this.logindata.success) {
          this.data.changeMessage("login successfull");
          this.routes.navigate(['/your-pets']);
        }
        else {
          this.routes.navigate(['/login']);
          // to do
          alert("invalid password");

        }

      });
    }

  }

  register(logindata: any) {
    console.log("posted");
    console.log(logindata);

    return this.http.post(BASE_URL.BLUE_NOSE + '/login', logindata);

  }
  getpets() {
    return this.http.get(BASE_URL.BLUE_NOSE + '/');
  }

}
