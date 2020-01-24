import { JWTapiService } from './../../WebApi/JWT/jwtapi.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private api: JWTapiService) { }

  ngOnInit() {
    this.check();
    if (this.login === true) {
      this.loginMessage = 'Welcome user';
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
        localStorage.setItem('token', data.toString());
      });
      console.log(this.loginMessage);
      this.loginMessage = 'Welcome user';
    }
  }

  check() {
    const p = localStorage.getItem('token');
    console.log(p);
    if (p == null) {
      console.log('token is null');
      this.login = false;
    } else {
      this.login = true;
      console.log('token has some value');
    }
  }

}
