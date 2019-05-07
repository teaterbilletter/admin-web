import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user.service';
import {isString} from 'ngx-bootstrap/chronos/utils/type-checks';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.isAuthenticated());
  }

  getUserName() {
    return this.isAuthenticated() ? '' : ' ' + this.userService.getUserName();
  }

  isAuthenticated() {
    return this.authService.isTokenExpired(this.authService.getToken());
  }



}
