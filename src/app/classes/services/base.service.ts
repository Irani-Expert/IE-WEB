import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Result } from '../result';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  headers = new HttpHeaders({
    accept: 'application/json',
  });
  constructor(private http: HttpClient) {}

  //Method GET
  get(path: string, params?: HttpParams): Observable<Result<T>> {
    return this.http
      .get<Result<T>>(`${environment.apiUrl + path}`, {
        headers: this.headers,
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  //Method POST
  post(path: string, body: any): Observable<Result<T>> {
    return this.http.post<Result<T>>(`${environment.apiUrl + path}`, body, {
      headers: this.headers,
    });
  }

  //Method PUT
  put(path: string, body: any): Observable<Result<{}>> {
    return this.http.put<Result<{}>>(`${environment.apiUrl + path}`, body, {
      headers: this.headers,
    });
  }

  //Method DELETE
  delete(path: string): Observable<Result<string>> {
    return this.http.delete<Result<string>>(`${environment.apiUrl + path}`, {
      headers: this.headers,
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
