import { Routes } from '@angular/router';

import { Techno2Component } from './techno2/techno2.component';
import { Techno3Component } from './techno3/techno3.component';
import { Techno4Component } from './techno4/techno4.component';
import { Techno5Component } from './techno5/techno5.component';
import { Techno6Component } from './techno6/techno6.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { Techno1Component } from './techno1/Techno1Component';

export const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },  // Redirect to the signup page by default

  { path: 'app', component: AppComponent },
  { path: 'Techno1', component: Techno1Component, title: 'HTML' },
  { path: 'Techno2', component: Techno2Component, title: 'CSS' },
  { path: 'Techno3', component: Techno3Component, title: 'JavaScript', canActivate: [AuthGuard] },
  { path: 'Techno4', component: Techno4Component, title: 'TypeScript', canActivate: [AuthGuard] },
  { path: 'Techno5', component: Techno5Component, title: 'Angular', canActivate: [AuthGuard] },
  { path: 'Techno6', component: Techno6Component, title: 'About', canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, title: 'Sign Up' },
  { path: 'login', component: LoginComponent, title: 'Login' }
];
