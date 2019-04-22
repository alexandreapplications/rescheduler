import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderBarComponent],
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
    exports: [HeaderBarComponent],
})
export class SharedModule {}
