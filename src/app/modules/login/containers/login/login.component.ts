import { Component } from '@angular/core';
import { UserDataService } from '../../../../services/user-data.service';
import { LoginData } from '../../../../models/login-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userDataService: UserDataService, private router: Router) {}

  onLogin(loginData: LoginData): void {
    console.log(loginData);
    this.userDataService.loginUser(loginData).subscribe(
      res => {
        this.router.navigate(['items']);
        localStorage.setItem('token', res);
      },
      error => console.log(error)
    );
  }
}
