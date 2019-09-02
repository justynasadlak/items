import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  ngOnInit() {}

  onLogin(userData): void {
    console.log(userData);
    this.userDataService.loginUser(userData).subscribe(res => localStorage.setItem('token', res));
  }
}
