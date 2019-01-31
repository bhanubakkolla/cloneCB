import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://httpbin.org/status/:code';
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post(this.URL, {'username': username, 'password': password}, httpOptions);
  }
  /*login (values){
    return this.http.post(this.URL, values, httpOptions);
  }*/
}
