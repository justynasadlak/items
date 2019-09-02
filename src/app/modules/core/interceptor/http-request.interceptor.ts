import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      Authorization: localStorage.getItem('token')
    };
    return next
      .handle(localStorage.getItem('token') ? req.clone({ setHeaders: headers }) : req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error}`;
          } else if (error.status === 403) {
            errorMessage = 'wrong login or password';
          } else {
            errorMessage = `Message: ${error.error.errors.map(err => err.defaultMessage)}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
