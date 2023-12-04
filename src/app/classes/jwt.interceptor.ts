// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { finalize } from 'rxjs';
// import { AuthService } from '../shared/auth/auth.service';

// @Injectable()
export class JWTIntreceptor {
  // constructor(private auth: AuthService) {}
  // intercept(request: HttpRequest<any>, next: HttpHandler) {
  //   if (AuthService.loggedIn.value) {
  //     request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${this.auth._user.token}`,
  //       },
  //     });
  //   }
  //   return next
  //     .handle(request)
  //     .pipe(finalize(() => console.log('intercepted')));
  // }
}
