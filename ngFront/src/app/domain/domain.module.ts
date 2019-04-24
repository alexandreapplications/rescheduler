import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { LandingComponent } from './operation/landing/landing.component';
import { SharableItemComponent } from './operation/components/sharable-item/sharable-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LandingComponent, SharableItemComponent],
    imports: [CommonModule, SharedModule, DomainRoutingModule],
})
export class DomainModule {}
