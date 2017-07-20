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
    this.chatMessage.getMessages().subscribe(
      (list) => this.messageList = list,
      (error) => console.error(error)
    );
  }

  public sendMessage(): void {
    var obj = {
      message: this.message,
      time: new Date(),
      author: this.chatMessage.name
    }



    this.chatMessage.sendMessage(obj)
      .subscribe((response) => {
        this.messageList.push(response.json());
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


  ngOnInit() {
    this.scrollToBottom();
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
