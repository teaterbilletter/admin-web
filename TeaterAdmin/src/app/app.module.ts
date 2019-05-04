import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { FooterComponent } from './static_content/footer/footer.component';
import { NavigationbarComponent } from './static_content/navigationbar/navigationbar.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
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
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    TabsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
