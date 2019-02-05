import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService,
  private cookie: CookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cookie.get('jwtToken')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ` + this.cookie.get('jwtToken')
        }
      });
    }
    return next.handle(req).pipe(catchError((error, caught) => {
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401  ) {
      console.log('handled error ' + err.status);
      return of(err.message);
    }
    throw err;
  }
}
