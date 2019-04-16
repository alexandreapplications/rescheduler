import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { LandingComponent } from './operation/landing/landing.component';
import { SharableItemComponent } from './operation/components/sharable-item/sharable-item.component';

@NgModule({
  declarations: [LandingComponent, SharableItemComponent],
  imports: [
    CommonModule,
    DomainRoutingModule
  ]
})
export class DomainModule { }
