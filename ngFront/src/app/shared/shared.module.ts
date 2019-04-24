import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PageStructureComponent } from './page-structure/page-structure.component';

@NgModule({
    declarations: [HeaderBarComponent, PageStructureComponent],
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
    exports: [HeaderBarComponent, PageStructureComponent],
})
export class SharedModule {}
