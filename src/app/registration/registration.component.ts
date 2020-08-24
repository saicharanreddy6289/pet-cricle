import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  repassword: string = "";
  logindata: any = {};

  emailinvalid: Boolean;
  passwordinvalid: Boolean;
  constructor(private routes: Router, private http: HttpClient) { }

  ngOnInit() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.password = "";
    this.logindata = {};
  }

  validate() {


    this.logindata = {
      email: this.email,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname

    }

    this.register(this.logindata).subscribe(logindata => {
      this.logindata = logindata;

    });
    setTimeout(() => {
      this.routes.navigate(['/login']);
    }, 1000)

  }

  register(logindata: any) {
    console.log("posted");
    console.log(logindata);

    return this.http.post(BASE_URL.BLUE_NOSE + '/signin', logindata);

  }

}
