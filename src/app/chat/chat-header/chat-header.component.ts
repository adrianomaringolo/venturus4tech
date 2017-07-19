import { ChatService } from '../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {

  constructor(private service: ChatService) {
    
  }

  getUsername(): string {
    return this.service.name;
  }

}
