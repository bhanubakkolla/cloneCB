import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    username: '',
    password: ''
  };
  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private route: Router
  ) {}
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    passFormControl = new FormControl('', [
      Validators.required
    ]);
    sendReq() {
      this.auth.login(this.model.username, this.model.password)
      .subscribe((success: {token: string}) => {
        if (success) {
          console.log('Login successful');
          this.cookieService.set( 'token', success.token );
          this.route.navigate(['/profile']);
        } else {
          console.log('Login failed');
        }
      });
    }
  ngOnInit() {
  }
}
