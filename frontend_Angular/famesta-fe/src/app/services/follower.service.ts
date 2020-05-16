import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private _follower_url: string = "http://127.0.0.1:8000/api/followers/get_followers/";//append userd id with this url
  private _following_url: string = "http://127.0.0.1:8000/api/followers/get_followings/";//append userd id with this url

  constructor(private http: HttpClient) { }

  getFollowersList(user_id): Observable<any>{
    return this.http.get(this._follower_url+user_id+"/")
  }

  getFollowingList(user_id): Observable<any>{
    return this.http.get(this._following_url+user_id+"/")
  }

}
