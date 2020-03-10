import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ch-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageCardComponent implements OnInit {

  @Input() data: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
