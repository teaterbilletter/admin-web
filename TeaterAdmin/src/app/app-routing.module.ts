import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {NgModule} from '@angular/core';
import {NewShowComponent} from './new-show/new-show.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AvailableShowsComponent} from './available-shows/available-shows.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {AuthGuardService} from './auth/auth-guard.service';


const appRoutes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'first-page', component: FirstPageComponent, canActivate: [AuthGuardService]},
  {path: 'new-show', component: NewShowComponent, canActivate: [AuthGuardService]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]},
  {path: 'signin', component: SigninComponent},
  {path: 'a-s', component: AvailableShowsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
