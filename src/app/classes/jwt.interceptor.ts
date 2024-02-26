import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';
// import { finalize } from 'rxjs';
// import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('polygon') || req.url.includes('marketdata')) {
      return next.handle(req);
    }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    return next.handle(req);
  }
  // constructor(private auth: AuthService) {}
  // intercept(request: HttpRequest<any>, next: HttpHandler) {

  // }

  get token() {
    if (AuthService.loggedIn.value) {
      return this._authService._user.token;
    } else {
      return 'anonymous';
    }
  }
}
