import { Component, OnInit } from '@angular/core';
import { ChatService } from "app/chat/chat.service";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {

  username: string = '';
  logTime: Date;

  constructor(private chatService: ChatService) {
    this.username = chatService.name;
    this.logTime = chatService.logTime;
  }
}
