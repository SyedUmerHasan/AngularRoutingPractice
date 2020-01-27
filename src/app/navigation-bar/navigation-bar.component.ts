import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Input() public title: string;
  login = false;
  constructor( private router: Router) {
    this.checkLogin();
    if (this.login === false) {
      this.router.navigate(['/signin']);
    }
  }

  ngOnInit() {
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
  logout() {
    localStorage.setItem('token', '');
    console.log(this.login);
    this.router.navigate(['/home']);
    this.login = false;
  }
}
