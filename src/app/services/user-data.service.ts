import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login-data';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'http://frontend-recruitment.one2tribe.pl:8080/';
  constructor(private http: HttpClient) {}

  loginUser(loginData: LoginData): Observable<string> {
    return this.http
      .post(this.url + 'api/authenticate', loginData, { observe: 'response' })
      .pipe(switchMap(res => of(res.headers.get('authorization'))));
  }

  isAuthenticated(): Observable<boolean> {
    return of(!!localStorage.getItem('token'));
  }
}
