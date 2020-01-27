import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRoutingPractice';
  login = false;

  constructor( private router: Router) {
    this.checkLogin();
  }

  checkLogin() {
    const p = localStorage.getItem('token');
    if (p === null || p === undefined || p === '' ) {
      console.log('token is null');
      this.login = false;
    } else {
      this.login = true;
      console.log('token has some value');
    }
  }

}
