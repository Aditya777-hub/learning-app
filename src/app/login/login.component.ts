import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(userid: any, password: any) {
    if (userid == 'aditya' && password == '123') {
      sessionStorage.setItem('isloggedin', 'true')
    } else {
      sessionStorage.setItem('isloggedin', 'false')
    }
  }
}
