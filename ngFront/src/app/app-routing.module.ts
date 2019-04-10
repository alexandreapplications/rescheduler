import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './public/main/main.component';
import { AuthGuard } from './infra/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'me',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard],
    },
    {
        path: ':domain',
        loadChildren: './domain/domain.module#DomainModule',
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
