import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  // private _base_url = "http://127.0.0.1:8000/"
  private _base_url = environment.apiBaseUrl;
  
  private _create_chat_instance_url = this._base_url+"/api/chat/create_chat_instance/" //appned the other username here
  private _update_unseen_msg_count = this._base_url+"/api/chat/update_unseen_msg_count/"  //appned the other username here
  private _reset_unseen_msg_count = this._base_url+"/api/chat/reset_unseen_msg_count/" //appned the other username here
  private _get_all_chat_instance = this._base_url+"/api/chat/get_chat_instance/"
  private _send_user_message = this._base_url+"/api/chat/post_chat_message/" //append the other username to whome you send the msg  data - {"message":"your message"}
  private _get_chat_msgs = this._base_url+"/api/chat/get_chat_messages/"  //appned the other username here
  private _update_msg_seen_status = this._base_url+"/api/chat/update_chat_seen/" //append the chat id here
  private _delete_chat_instance = this._base_url+"/api/chat/delete_chat_instance/" //append the user id
  private _delete_user_message = this._base_url+"/api/chat/delete_chat_messages/" //append the username

  createChatInstance(username): Observable<any>{
    return this.http.post<any>(this._create_chat_instance_url+username+"/",{});
  }

  updateUnseenMsgCount(username):Observable<any>{
    return this.http.post<any>(this._update_unseen_msg_count+username+"/",{});
  }

  resetUnseenMsgCount(username):Observable<any>{
    return this.http.post<any>(this._reset_unseen_msg_count+username+"/",{});
  }

  getAllChatInstance():Observable<any>{
    return this.http.get(this._get_all_chat_instance)
  }

  sendUserMessage(username,data):Observable<any>{
    return this.http.post<any>(this._send_user_message+username+"/",data)
  }

  getChatMsgs(username):Observable<any>{
    return this.http.get(this._get_chat_msgs+username+"/")
  }

  updateMsgSeenStatus(chatID):Observable<any>{
    return this.http.post<any>(this._update_msg_seen_status+chatID+"/",{})
  }

  deleteChatInstance(userID):Observable<any>{
    return this.http.delete(this._delete_chat_instance+userID+"/")
  }

  deleteAllUserMsgs(username):Observable<any>{
    return this.http.delete(this._delete_user_message+username+"/")
  }


}
