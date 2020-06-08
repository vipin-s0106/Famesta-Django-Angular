import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatWindowUser;
  public chatInstanceList;
  public ChatMessages;
  

  public search_input;
  public searched_user;

  public userWindowFlag=false

  public message = {"message":""}

  constructor(public chat_srv:ChatService,public usr_srv:UserService,private route:ActivatedRoute,public not_srv:NotificationService) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.chat_srv.getAllChatInstance().subscribe(
      res => {
        this.chatInstanceList = res;
        console.log(this.chatInstanceList)
        if(username){
          this.userWindowFlag=true
          this.getAllUserMessages(username);
        }
      },
      err => {
        console.log(err)
      }
    )

    //updating the navbar
    this.updateNavBar()

  }

  public search_user(): any{
    this.usr_srv.search_user(this.search_input).subscribe(
      res => {
        this.searched_user = res
      },
      err => this.searched_user=null
    )
  }


  getAllUserMessages(username){
    this.chat_srv.getChatMsgs(username).subscribe(
      res =>{
        this.userWindowFlag=true;
        this.ChatMessages = res;
        console.log(this.ChatMessages)
        this.usr_srv.getUserProfile(username).subscribe(
            res => {
              this.chatWindowUser = res;
              console.log(this.chatWindowUser)
              this.updateChatInstanceList()
              this.loadScript()     
          }
        )
        
      }
    )
    
  }

  updateChatInstanceList(){
    this.chat_srv.getAllChatInstance().subscribe(
      res => {
        this.chatInstanceList = res;
      },
      err => {
        console.log(err)
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
      res => {
        this.getAllUserMessages(username);
        this.updateChatInstanceList();
        this.search_input=""
        this.userWindowFlag=true
      }
    )
  }

  deleteChatInstance(user_id,username){
    this.chat_srv.deleteChatInstance(user_id).subscribe(
      res =>{
        
        if(this.userWindowFlag){
          if(this.chatWindowUser.username === username){
            this.userWindowFlag=false
          }
          else{
            this.userWindowFlag=true
            this.getAllUserMessages(this.chatWindowUser.username);
          }
          this.updateChatInstanceList();
        }
        else{
          console.log("coming to last else Block")
          this.userWindowFlag=false
          this.updateChatInstanceList();
        }
        
      },
      err =>{
        console.log(err)
      }
    )
  }



  loadScript(){
    var messageBody = document.getElementById('messageBody');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }


  updateNavBar(){
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => { 
        this.usr_srv.LoggedUserId.next(res.id);
        this.not_srv.getNotificationCount(res.id).subscribe(
          res => this.not_srv.notification_count.next(res.notification_count)
        )
      }
    )
  }

}
