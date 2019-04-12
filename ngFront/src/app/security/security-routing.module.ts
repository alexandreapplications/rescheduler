import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
    { path: 'signin', component: LogonComponent },
    { path: 'subscribe', component: SubscribeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecurityRoutingModule {}
