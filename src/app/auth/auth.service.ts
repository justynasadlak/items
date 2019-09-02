import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(public router: Router, private userDataService: UserDataService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userDataService.isAuthenticated().pipe(
      switchMap((res: boolean) => {
        console.log(res);
        if (!res) {
          this.router.navigate(['login']);
        }
        return of(res);
      }),
      catchError(err => of(err))
    );
  }
}
