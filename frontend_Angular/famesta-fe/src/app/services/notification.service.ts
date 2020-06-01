import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _createFollowNotificationRequestUrl: string = "http://127.0.0.1:8000/api/notification/follow/";//append userd id with this url
  private _getUserNotification_url: string = "http://127.0.0.1:8000/api/notification/";  //append user id here
  private _deleteNotification_url: string = "http://127.0.0.1:8000/api/notification/delete/"; //apped notification id
  private _deleteAllUserNotification_url: string = "http://127.0.0.1:8000/api/notification/delete_all/"; //append the user id
  private _getNotification_count_url: string = "http://127.0.0.1:8000/api/notification/count/"  //append user id with this


  constructor(private http: HttpClient) { }

  createFollowRequest(user_id,postData): Observable<any>{
    return this.http.post<any>(this._createFollowNotificationRequestUrl+user_id+"/",postData);
  }

  getUserNotification(user_id): Observable<any>{
    return this.http.get(this._getUserNotification_url+user_id+"/");
  }

  deleteNotification(notification_id): Observable<any>{
    return this.http.delete(this._deleteNotification_url+notification_id+"/")
  }

  deleteAllNotification(user_id): Observable<any>{
    return this.http.delete(this._deleteAllUserNotification_url+user_id+"/")
  }

  getNotificationCount(user_id):Observable<any>{
    return this.http.get(this._getNotification_count_url+user_id+"/")
  }




}
