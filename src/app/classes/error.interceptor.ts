import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

export interface RetryRequestOptions {
  maximumRetries: number;
  retryDelay: number;
}

@Injectable()
export class RetryHttpErrorsInterceptor implements HttpInterceptor {
  private retryRequestOptions: RetryRequestOptions = {
    maximumRetries: 2,
    retryDelay: 1000, //milliseconds
  };
  constructor() {}
  intercept(
    _req: HttpRequest<unknown>,
    _next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return _next.handle(_req).pipe(
      retry({
        delay: this.retryRequestOptions.retryDelay,
        count: this.retryRequestOptions.maximumRetries,
      })
    );
  }
}
