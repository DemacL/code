import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // private messages: string[];

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    // this.messages = this.messageService.messages;
  }

}
