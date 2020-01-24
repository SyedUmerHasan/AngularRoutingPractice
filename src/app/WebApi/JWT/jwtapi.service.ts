import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const localUrl = 'http://localhost:5000/api/login';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class JWTapiService {

  constructor(private http: HttpClient) { }

  getLoginCredentials() {
    return this.http.post(localUrl, null, httpOptions);
  }
}
