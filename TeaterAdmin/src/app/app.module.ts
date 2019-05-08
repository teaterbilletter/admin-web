import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { NewShowComponent } from './first-page/manage_shows/new-show/new-show.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {TabsModule} from 'ngx-bootstrap';
import {AuthService} from './auth/auth.service';
import { AvailableShowsComponent } from './first-page/available-shows/available-shows.component';
import { FirstPageComponent } from './first-page/first-page.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Intercept} from './intercepter';
import {UserService} from './user.service';
import { AddTheatersComponent } from './first-page/manage_theaters/add-theaters/add-theaters.component';
import { AddHallComponent } from './first-page/manage_halls/add-hall/add-hall.component';
import { DeleteCustomerComponent } from './first-page/manage_customers/delete-customer/delete-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    NewShowComponent,
    SignupComponent,
    SigninComponent,
    AvailableShowsComponent,
    FirstPageComponent,
    AddTheatersComponent,
    AddHallComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    TabsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Intercept,
      multi: true
    },
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
