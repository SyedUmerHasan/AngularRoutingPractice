import { JWTapiService } from './../../WebApi/JWT/jwtapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';
  smartphone: any = [];
  login = false;
  loginMessage = '';

  constructor(private api: JWTapiService , private router: Router) { }

  ngOnInit() {
    this.checkLogin();
    if (this.login === true) {
      this.loginMessage = 'Welcome user';
      this.router.navigate(['/home']);
    } else {

    }
  }

  logout() {
    localStorage.setItem('token', '');
    this.loginMessage = '';
    this.login = false;
  }

  submitdata() {
    console.log('username = ' + this.username);
    console.log('password = ' + this.password);
    if (this.loginMessage !== 'Welcome user') {
      this.api.getLoginCredentials().subscribe(data => {
        localStorage.setItem('token', JSON.stringify(data));
      });
      this.loginMessage = 'Welcome user';
      this.router.navigate(['/home']);
    }
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
