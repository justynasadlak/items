import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService as AuthGuard } from './auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./modules/item/item.module').then(mod => mod.ItemModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
