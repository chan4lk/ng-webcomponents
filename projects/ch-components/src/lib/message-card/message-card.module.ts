import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCardComponent } from './message-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MessageCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MessageCardComponent, MatCardModule]
})
export class MessageCardModule {}
