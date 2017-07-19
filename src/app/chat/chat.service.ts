import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  name: string = '';

  constructor() { 
    while(this.name == '')
      this.name = prompt('Qual é o seu nome?');
  }

}
