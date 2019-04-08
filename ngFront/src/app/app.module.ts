import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './public/main/main.component';
import { SharedModule } from './shared/shared.module';
import { DomainService } from './infra/services/domain.service';
import { ResourceItemService } from './infra/services/resource-item.service';
import { SecurityService } from './infra/services/security.service';
import { UserService } from './infra/services/user.service';

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
    providers: [DomainService, ResourceItemService, SecurityService, UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}
