import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'http://frontend-recruitment.one2tribe.pl:8080/';
  constructor(private http: HttpClient) {}

  getUserToken(loginData: LoginData): Observable<string> {
    return this.http.post<string>('api/authenticate', loginData);
  }
}
