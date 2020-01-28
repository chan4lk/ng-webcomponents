import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ch-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input() data: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
