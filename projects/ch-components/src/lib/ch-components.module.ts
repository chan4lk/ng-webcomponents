import { NgModule, Injector } from '@angular/core';
import { ChComponentsComponent } from './ch-components.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ChComponentsComponent],
  imports: [CommonModule],
  exports: [ChComponentsComponent],
  entryComponents: [ChComponentsComponent]
})
export class ChComponentsModule {
  constructor(private injector: Injector) {
    const ngElement = createCustomElement(ChComponentsComponent, {
      injector: this.injector
    });
    customElements.define('ch-component-custom', ngElement);
    console.log('bootrapping', ngElement);
  }
}
