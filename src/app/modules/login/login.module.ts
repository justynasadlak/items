import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginViewComponent } from './components/login-view/login-view.component';



@NgModule({
  declarations: [LoginComponent, LoginViewComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
