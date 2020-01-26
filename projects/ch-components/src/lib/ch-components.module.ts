import { NgModule, Injector } from '@angular/core';
import { ChComponentsComponent } from './ch-components.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChComponentsComponent],
  imports: [CommonModule],
  exports: [ChComponentsComponent],
  entryComponents: [ChComponentsComponent]
})
export class ChComponentsModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const ngElement = createCustomElement(ChComponentsComponent, {
      injector: this.injector
    });
    customElements.define('ch-component', ngElement);
  }
}
