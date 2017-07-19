import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message: string = '';
  messageList: Object[] = [];

  constructor() { }

  public sendMessage(): void {
    this.messageList.push({ 
      message: this.message,
      time: new Date()
    });
    this.message = '';
  }

  getKeyPress(e) {
    // se digitou apenas Enter, manda a mensagem, se apertou Shift também, não faz nada diferente, ou seja, apenas pula a linha
    if (e.code == "Enter" && !e.shiftKey) {
      this.sendMessage();
      e.preventDefault();
    }
  }
}
