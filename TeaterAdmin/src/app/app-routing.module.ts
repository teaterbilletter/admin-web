import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {NgModule} from '@angular/core';
import {NewShowComponent} from './new-show/new-show.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';


const appRoutes: Routes = [
  {path: '', component: SigninComponent, pathMatch: 'full' },
  {path: 'login ', component: LoginComponent },
  {path: 'welcome-page', component: WelcomePageComponent },
  {path: 'new-show', component: NewShowComponent},
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
