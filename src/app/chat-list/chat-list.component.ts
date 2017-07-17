import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],

})
export class ChatListComponent implements OnInit {

  message: string = '';
  messageList: any[] = [];
  server = null;

  representationOfThis = this;

  constructor() {
    this.server = io('http://localhost:3000');
   }

  ngOnInit() {
    this.server.on('connect', (data) => {
      var nickname = prompt("What is your name?");

      this.server.emit('join', nickname);
    })

    this.server.on('messages', (data) => {
      this.messageList.push({message: data});
    });
  }

  sendMessage() {
    this.messageList.push({ message: this.message, time: new Date().toLocaleTimeString() });
    this.server.emit('messages', this.message);
    this.message = '';
  }

  getKeyPress(e) {
    if (e.code == "Enter" && !e.shiftKey) {
      this.sendMessage();
      return false;
    }
  }

}
