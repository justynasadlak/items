import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./modules/item/item.module').then(mod => mod.ItemModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
