import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { MatCardModule, MatInputModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LogonComponent } from './logon/logon.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
    declarations: [LogonComponent, SubscribeComponent],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        ReactiveFormsModule,
    ],
})
export class SecurityModule {}
