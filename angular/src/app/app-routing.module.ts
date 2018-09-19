import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';


const appRouter:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
