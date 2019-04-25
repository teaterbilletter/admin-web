import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {NgModule} from '@angular/core';
import {NewShowComponent} from './new-show/new-show.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full' },
  {path: 'login ', component: LoginComponent },
  {path: 'welcome-page', component: WelcomePageComponent },
  {path: 'new-show', component: NewShowComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
