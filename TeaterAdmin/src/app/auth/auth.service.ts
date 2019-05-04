import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';

export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AuthService {

  private url = 'api/auth';

  constructor(private client: HttpClient) { }

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

  login(user) {
    this.client.get(this.url).subscribe(result => {
      console.log(result);
    });
  }

}




