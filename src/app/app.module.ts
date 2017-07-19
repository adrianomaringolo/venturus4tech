import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from "app/chat/chat.service";
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ChatService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
