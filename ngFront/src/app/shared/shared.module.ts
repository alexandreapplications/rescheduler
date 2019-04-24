import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PageStructureComponent } from './page-structure/page-structure.component';

@NgModule({
    declarations: [HeaderBarComponent, PageStructureComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        RouterModule,
    ],
    exports: [HeaderBarComponent, PageStructureComponent],
})
export class SharedModule {}
