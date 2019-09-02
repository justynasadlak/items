import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login-data';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'http://frontend-recruitment.one2tribe.pl:8080/';
  constructor(private http: HttpClient) {}

  loginUser(loginData: LoginData) {
    return this.http.post(this.url + 'api/authenticate', loginData, { observe: 'response' }).pipe(
      switchMap(res => of(res.headers.get('authorization'))),
      catchError(err => of(err))
    );
  }
}
