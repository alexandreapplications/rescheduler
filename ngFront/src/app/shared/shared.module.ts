import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderBarComponent],
    imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
    exports: [HeaderBarComponent],
})
export class SharedModule {}
