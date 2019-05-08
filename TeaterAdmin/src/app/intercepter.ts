import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class Intercept implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(localStorage.getItem('jwt_token'));
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      }
    });

    return next.handle(req);
  }
}
