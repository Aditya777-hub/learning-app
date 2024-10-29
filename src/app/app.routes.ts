import { Routes } from '@angular/router';
import { Techno1Component } from './techno1/Techno1Component';
import { Techno2Component } from './techno2/techno2.component';
import { Techno3Component } from './techno3/techno3.component';
import { Techno4Component } from './techno4/techno4.component';
import { Techno5Component } from './techno5/techno5.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { Techno6Component } from './techno6/techno6.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
{path:'',redirectTo:"AppComponent",pathMatch:'full'},

{path:'app',component:AppComponent},
{path:'Techno1',component:Techno1Component,title:'HTML'},
{path:'Techno2',component:Techno2Component,title:'CSS'},
{path:'Techno3',component:Techno3Component,title:'Javascript',canActivate:[authGuard]},
{path:'Techno4',component:Techno4Component,title:'Typescript',canActivate:[authGuard]},
{path:'Techno5',component:Techno5Component,title:'Angular',canActivate:[authGuard]},
{path:'Techno6',component:Techno6Component,title:'About',canActivate:[authGuard]},
{path:'login',component:LoginComponent,title:'login'},




];
