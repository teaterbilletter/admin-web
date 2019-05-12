import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';

export const TOKEN_NAME = 'jwt_token';

interface LoginResult {
  response: string
  token?: string;
}

@Injectable()
export class AuthService {


  private url = 'https://disttickets.northeurope.cloudapp.azure.com/';

  constructor(private client: HttpClient, private userService: UserService) { }


  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }


  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = this.getToken(); }
    if (!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

  login(name: string, password: string) {
    this.client.post<LoginResult>(this.url, {name, password}).subscribe((result: LoginResult) => {
      this.setToken(result.token);
      this.userService.setUserName(result.response);
    }, error => {
      console.log(error.error);
      window.alert(error.error);
    });
  }
}




