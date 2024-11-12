// login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any[] = [];
  loginobj: any = {
    Name: '',
    Mobile: '',
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const local = localStorage.getItem('user');
    if (local != null) {
      this.user = JSON.parse(local);
    }
  }

  Login() {
    const userExist = this.user.find(m => m.Name === this.loginobj.Name && m.Mobile === this.loginobj.Mobile);
    if (userExist) {
      localStorage.setItem('isLoggedIn', 'true');  // Set login state
      alert('User logged in successfully');
      this.router.navigate(['/Techno3']);  // Redirect to JavaScript page
    } else {
      alert('Invalid login credentials');
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
