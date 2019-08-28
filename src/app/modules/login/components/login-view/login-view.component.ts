import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;

  @Output()
  login: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(): void {
    this.login.emit(this.loginForm.value);
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
}
