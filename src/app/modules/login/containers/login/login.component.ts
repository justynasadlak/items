import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../services/user-data.service';
import { LoginData } from '../../../../models/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  ngOnInit() {}

  onLogin(loginData: LoginData): void {
    console.log(loginData);
    this.userDataService.loginUser(loginData).subscribe(
      res => {
        localStorage.setItem('token', res);
      },
      error => console.log(error)
    );
  }
}
