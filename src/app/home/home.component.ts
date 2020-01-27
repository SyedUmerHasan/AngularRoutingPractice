import { JWTapiService } from './../WebApi/JWT/jwtapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: JWTapiService) {
  }

  ngOnInit() {
    this.api.getHomeData();
  }

}
