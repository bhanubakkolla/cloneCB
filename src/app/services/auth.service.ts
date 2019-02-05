import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable ({
  providedIn: 'root'
})

export class AuthService {
      URL = 'http://172.20.126.27:3000/auth';
   // URL = 'http://httpbin.org/status/:code';
  constructor(private http: HttpClient,
  private cookie: CookieService) {}
  login(username: string, password: string) {
    return this.http.post(this.URL, {'username': username, 'password': password}, httpOptions);
  }
  loggedIn() {
    return !!this.cookie.get('token');
  }
}
