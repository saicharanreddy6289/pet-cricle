import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { Router, Event, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event && event.url.indexOf('login') !== -1) {
        this.showLoginButton = false
      } else {
        this.showLoginButton = true;
      }
    });
  }
  showLoginButton = true;
  message: string;
  showMenuItem = false;
  title = 'front-end';
  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      if (this.message === 'login successfull') {
        this.showMenuItem = true;
      } else {
        this.showMenuItem = false;
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.data.changeMessage("login not successfull");
    this.router.navigate(['/home']);
   
  }
}
