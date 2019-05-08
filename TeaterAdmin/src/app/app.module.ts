import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {DropdownDirective} from './welcome-page/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { NewShowComponent } from './new-show/new-show.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {TabsModule} from 'ngx-bootstrap';
import {AuthService} from './auth/auth.service';
import { AvailableShowsComponent } from './available-shows/available-shows.component';
import { FirstPageComponent } from './first-page/first-page.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Intercept} from './intercepter';
import {UserService} from './user.service';
import { NewTeaterComponent } from './new-teater/new-teater.component';
import { AddTheatersComponent } from './add-theaters/add-theaters.component';
import { AddHallComponent } from './add-hall/add-hall.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    AdminComponent,
    LoginComponent,
    WelcomePageComponent,
    TestComponentComponent,
    DropdownDirective,
    NewShowComponent,
    SignupComponent,
    SigninComponent,
    AvailableShowsComponent,
    FirstPageComponent,
    NewTeaterComponent,
    AddTheatersComponent,
    AddHallComponent
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
