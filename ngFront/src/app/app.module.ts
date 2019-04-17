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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    ],
    providers: [DomainService, ResourceItemService, SecurityService, UserService, HttpClient],
    bootstrap: [AppComponent],
})
export class AppModule {}
