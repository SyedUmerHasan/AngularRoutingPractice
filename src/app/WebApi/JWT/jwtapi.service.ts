import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const loginURL = 'http://localhost:5000/api/login';
const apiURL = 'http://localhost:5000/api/posts';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token')

  })
};

@Injectable({
  providedIn: 'root'
})

export class JWTapiService {

  constructor(private http: HttpClient) { }

  getLoginCredentials() {
    return this.http.post(loginURL, null, httpOptions);
  }

  getHomeData() {
    return this.http.post(apiURL, null, httpOptions);
  }
}
