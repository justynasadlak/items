import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, LoginViewComponent],
  imports: [CommonModule, SharedModule, LoginRoutingModule],
  exports: [LoginComponent]
})
export class LoginModule {}
