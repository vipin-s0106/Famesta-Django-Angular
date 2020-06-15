import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'
import { NotificationService } from '../services/notification.service';

import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';


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

  public send_msg_file: File;
  public upload_msg_img;

  public message = {"message":""}


  subscription: Subscription;

  toggled: boolean = false;

  public modal_img;

  constructor(public chat_srv:ChatService,public usr_srv:UserService,private route:ActivatedRoute,public not_srv:NotificationService) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.chat_srv.getAllChatInstance().subscribe(
      res => {
        this.chatInstanceList = res;
        // console.log(this.chatInstanceList)
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


  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }


  handleSelection(event) {
    this.message.message += event.char;
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
    if(this.subscription){
      this.subscription.unsubscribe();
    }

    let ideal_timer = 0

    this.subscription = timer(0, 300000).pipe(
      switchMap(() => this.chat_srv.getChatMsgs(username))
    ).subscribe(
        res =>{
          this.userWindowFlag=true;
          this.ChatMessages = res;
          // console.log(this.ChatMessages)
          this.usr_srv.getUserProfile(username).subscribe(
              res => {
                this.chatWindowUser = res;
                // console.log(this.chatWindowUser)
                this.updateChatInstanceList()
                this.loadScript()  
                ideal_timer = ideal_timer + 1
                // console.log(ideal_timer)
                if (ideal_timer == 55){
                  this.subscription.unsubscribe();
                }

            }
          )
          
        }
      )
    // this.chat_srv.getChatMsgs(username).subscribe(
    //   res =>{
    //     this.userWindowFlag=true;
    //     this.ChatMessages = res;
    //     console.log(this.ChatMessages)
    //     this.usr_srv.getUserProfile(username).subscribe(
    //         res => {
    //           this.chatWindowUser = res;
    //           console.log(this.chatWindowUser)
    //           this.updateChatInstanceList()
    //           this.loadScript()     
    //       }
    //     )
        
    //   }
    // )
    
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

  onSendMsgImg(event){
    this.send_msg_file = event.target.files[0];
    // console.log(this.send_msg_file.name)
  }


  sendUserMessage(username){
    const uploadData = new  FormData();
    if (this.message.message){
      uploadData.append('message',this.message.message)
    }
    if(this.send_msg_file){
      uploadData.append('image',this.send_msg_file,this.send_msg_file.name)
    }
    this.chat_srv.sendUserMessage(username,uploadData).subscribe(
      res => {
        this.getAllUserMessages(username),
        this.message.message = "";
        this.send_msg_file = null;
      }
    )
  }

  createUserInstance(username){
    this.chat_srv.createChatInstance(username).subscribe(
      res => {
        this.updateChatInstanceList();
        this.getAllUserMessages(username);
        this.search_input=""
        this.userWindowFlag=true
      }
    )
  }

  deleteChatInstance(user_id,username){
    this.chat_srv.deleteChatInstance(user_id).subscribe(
      res =>{
        
        if(this.userWindowFlag){
          this.updateChatInstanceList();
          if(this.chatWindowUser.username === username){
            this.userWindowFlag=false
            if(this.subscription){
              this.subscription.unsubscribe();
            }
          }
          else{
            this.userWindowFlag=true
            this.getAllUserMessages(this.chatWindowUser.username);
          } 
        }
        else{
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

  openImgModal(image){
    // modalImg.src = image
    this.modal_img = image
  }

}
