import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any[] = [];
  signobj: any = {
    Name: '',
    Mobile: '',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem('user');
    if (local != null) {
      this.user = JSON.parse(local);
    }
  }

  SignUp() {
    const userExist = this.user.find(m => m.Name === this.signobj.Name && m.Mobile === this.signobj.Mobile);
    if (!userExist) {
      this.user.push(this.signobj);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.signobj = { Name: '', Mobile: '' };
      this.router.navigate(['/login']);  // Navigate to login page after sign-up
    } else {
      alert('User already exists');
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
