import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './public/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ':domain/admin',
    loadChildren: './domain/admin/admin.module#AdminModule'
  },
  {
    path: 'me',
    loadChildren: './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
