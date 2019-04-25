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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationbarComponent,
    AdminComponent,
    LoginComponent,
    WelcomePageComponent,
    TestComponentComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
