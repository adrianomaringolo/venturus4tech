import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  name: string = '';
  logTime: Date;

  constructor() { 

    while(this.name == '')
      this.name = prompt("What is your name?");

    this.logTime = new Date();
  }

}
