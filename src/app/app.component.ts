import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {
    username: '',
    password: ''
  };
 // invalidLogin: boolean;
  userName: string;
  securePassword: string;
  messages = [''];
  constructor(
    // private router: Router,
    private auth: AuthService ) {}
    sendReq() {
      this.auth.login(this.model.username, this.model.password)
      .subscribe(success => {
        if (success) {
          console.log('Login successful');
        } else {
          console.log('Login failed');
        }
      });
    }
    /*sendReq() {
      this.messages = ['{\tusername: \'' + this.userName + '\',\tpassword: \'' + this.securePassword + '\'\t}'];
      console.log(this.messages);
      this.auth.login(this.messages).subscribe(auth => console.log(this.messages));
    }*/
  }
  /*sendReq(credentials) {
    this.authService.login(credentials)
    .subscribe(result => {
      if (result) {
         this.router.navigate(['/profile']);
      } else {
         this.invalidLogin = true;
      }
    } );
    }*/
