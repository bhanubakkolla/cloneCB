import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
