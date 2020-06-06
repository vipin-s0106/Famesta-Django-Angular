import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatWindowUser;
  public chatInstanceList;
  public ChatMessages;

  public message = {"message":""}

  constructor(public chat_srv:ChatService,public usr_srv:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.chat_srv.getAllChatInstance().subscribe(
      res => {
        this.chatInstanceList = res;
        console.log(this.chatInstanceList)
        if(username != ""){
          this.getAllUserMessages(username);
        }
      },
      err => {
        console.log(err)
      }
    )

  }

  getAllUserMessages(username){
    this.chat_srv.getChatMsgs(username).subscribe(
      res =>{
        this.ChatMessages = res;
        console.log(this.ChatMessages)
        this.usr_srv.getUserProfile(username).subscribe(
            res => {
              this.chatWindowUser = res;
              console.log(this.chatWindowUser)
              this.loadScript()     
          }
        )
      }
    )
    
  }


  sendUserMessage(username){
    if (this.message.message != ""){
      this.chat_srv.sendUserMessage(username,this.message).subscribe(
        res => {
          this.getAllUserMessages(username)
        }
      )
    }
  }

  createUserInstance(username){
    this.chat_srv.createChatInstance(username).subscribe(
      res => this.getAllUserMessages(username)
    )
  }



  loadScript(){
    var messageBody = document.getElementById('messageBody');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }

}
