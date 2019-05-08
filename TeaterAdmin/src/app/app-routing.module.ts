import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AvailableShowsComponent} from './first-page/available-shows/available-shows.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {AuthGuardService} from './auth/auth-guard.service';
import { AddTheatersComponent } from './first-page/manage_theaters/add-theaters/add-theaters.component';
import { AddHallComponent } from './first-page/manage_halls/add-hall/add-hall.component';
import { NewShowComponent } from './first-page/manage_shows/new-show/new-show.component';
import {DeleteCustomerComponent} from "./first-page/manage_customers/delete-customer/delete-customer.component";


const appRoutes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'first-page', component: FirstPageComponent, canActivate: [AuthGuardService]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]},
  {path: 'signin', component: SigninComponent},
  {path: 'a-s', component: AvailableShowsComponent, canActivate: [AuthGuardService]},
  {path: 'AddTheater', component: AddTheatersComponent, canActivate: [AuthGuardService]},
  {path: 'AddHall', component: AddHallComponent, canActivate: [AuthGuardService]},
  {path: 'AddShow', component: NewShowComponent, canActivate: [AuthGuardService]},
  {path: 'DeleteCustomer', component: DeleteCustomerComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
