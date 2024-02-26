import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
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
    if (req.url.includes('GetActualValByID')) {
      return next.handle(req);
    }
    AppComponent.loaderSubject.next(true);
    return next
      .handle(req)
      .pipe(finalize(() => AppComponent.loaderSubject.next(false)));
  }
}
