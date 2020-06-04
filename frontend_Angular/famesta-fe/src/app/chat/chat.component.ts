import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript()
  }

  loadScript(){
    var messageBody = document.getElementById('messageBody');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }

}
