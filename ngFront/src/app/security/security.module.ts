import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LogonComponent } from './logon/logon.component';

@NgModule({
    declarations: [LogonComponent],
    imports: [CommonModule, SecurityRoutingModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class SecurityModule {}
