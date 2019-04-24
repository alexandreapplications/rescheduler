import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [UserLandingComponent],
    imports: [CommonModule, UserRoutingModule, FlexLayoutModule, MatCardModule, MatButtonModule, SharedModule],
})
export class UserModule {}
