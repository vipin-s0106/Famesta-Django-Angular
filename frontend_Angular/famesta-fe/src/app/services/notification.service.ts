import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _createFollowNotificationRequestUrl: string = "http://127.0.0.1:8000/api/notification/follow/";//append userd id with this url

  constructor(private http: HttpClient) { }

  createFollowRequest(user_id,postData): Observable<any>{
    return this.http.post<any>(this._createFollowNotificationRequestUrl+user_id+"/",postData);
  }
}
