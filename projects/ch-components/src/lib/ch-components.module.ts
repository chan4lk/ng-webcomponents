import { NgModule, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { ChComponentsComponent } from './ch-components.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
declare var require: any;
@NgModule({
  declarations: [ChComponentsComponent],
  imports: [CommonModule],
  exports: [ChComponentsComponent],
  entryComponents: [ChComponentsComponent]
})
export class ChComponentsModule {
  constructor(private injector: Injector,  @Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      const { createCustomElement } = require('@angular/elements');

      // register the custom element with the browser.
      const ngElement = createCustomElement(ChComponentsComponent, {
        injector: this.injector
      });
      customElements.define('ch-component-custom', ngElement);
      console.log('bootrapping', ngElement);
    }
    
  }
}
