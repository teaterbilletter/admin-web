import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isTokenExpired(this.authService.getToken())) {
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() { }

  public OnLoginPressed(name: string, password: string) {
    this.authService.login(name, password);
  }

}
