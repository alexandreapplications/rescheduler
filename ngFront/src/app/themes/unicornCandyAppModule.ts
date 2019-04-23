import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({})
export class UnicornCandyAppModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    }
}
