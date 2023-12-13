import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { AppComponent } from '../app.component';
// import { finalize } from 'rxjs';
// import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    AppComponent.loaderSubject.next(true);
    return next.handle(req).pipe(
      delay(500),
      finalize(() => AppComponent.loaderSubject.next(false))
    );
  }
  // constructor(private auth: AuthService) {}
  // intercept(request: HttpRequest<any>, next: HttpHandler) {

  // }
}
