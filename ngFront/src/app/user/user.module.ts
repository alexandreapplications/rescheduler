import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    declarations: [UserLandingComponent],
    imports: [CommonModule, UserRoutingModule, MatCardModule],
})
export class UserModule {}
