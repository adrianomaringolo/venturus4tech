import { ChatService } from '../chat.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

  @Input() text: string = '';
  @Input() time: string = '';
  letter = '';
  name = '';

  backgroundColor: SafeStyle;
  color: SafeStyle;

  constructor(private sanitizer: DomSanitizer, private chatService: ChatService) {
    this.letter =  chatService.name.substr(0, 1);
    this.name = chatService.name;
    this.backgroundColor = this.sanitizer.bypassSecurityTrustStyle(this.stringToColor(chatService.name));

    if (this.getColorBrightness(chatService.name) == 0)
      this.color = this.sanitizer.bypassSecurityTrustStyle('#000000');
    else
      this.color = this.sanitizer.bypassSecurityTrustStyle('#ffffff');
  }

  private stringToColor(str): string {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  getColorBrightness(str): number {

    var c = str.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >> 8) & 0xff;  // extract green
    var b = (rgb >> 0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 140)
      return 1;

    return 0;
  }

}
