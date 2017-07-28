import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from "app/chat/chat.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  message: string = '';
  messageList: any[] = [];

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private chatMessage: ChatService) {
    
  }

  public sendMessage(): void {
    var obj = {
      message: this.message,
      author: this.chatMessage.name
    }

    this.chatMessage.server.emit('messages',obj)

    this.message = '';
  }

  getKeyPress(e) {
    // se digitou apenas Enter, manda a mensagem, se apertou Shift também, não faz nada diferente, ou seja, apenas pula a linha
    if (e.code == "Enter" && !e.shiftKey) {
      this.sendMessage();
      e.preventDefault();
    }
  }


  ngOnInit() {
    this.scrollToBottom();
    this.chatMessage.server.on('messages', message => {
      this.messageList.push(message);
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
