import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private _follower_url: string = "http://127.0.0.1:8000/api/followers/get_followers/";//append userd id with this url
  private _following_url: string = "http://127.0.0.1:8000/api/followers/get_followings/";//append userd id with this url
  private _remove_follower_url: string = "http://127.0.0.1:8000/api/followers/remove_follower/";//append userd id and followed user id with this url
  private _unfollow_follower_url: string = "http://127.0.0.1:8000/api/followers/unfollow_user/";//append userd id and following user id with this url 
  private _userSuggestionUrl: string = "http://127.0.0.1:8000/api/followers/suggestion/";//append userd id with this url
  private _accept_user_follow_request_url: string = "http://127.0.0.1:8000/api/followers/accept_request/";//append userd id and follower user id with this url
  private _blocked_user_url: string = "http://127.0.0.1:8000/api/followers/blocked_user/";//append userd id and followed user id with this url
  private _unblocked_user_url: string = "http://127.0.0.1:8000/api/followers/unblocked_user/";//append userd id and followed user id with this url

  constructor(private http: HttpClient) { }

  getUserSuggestion(user_id): Observable<any>{
    return this.http.get(this._userSuggestionUrl+user_id+"/")
  }

  getFollowersList(user_id): Observable<any>{
    return this.http.get(this._follower_url+user_id+"/")
  }

  getFollowingList(user_id): Observable<any>{
    return this.http.get(this._following_url+user_id+"/")
  }


  acceptUserRequest(user_id,follower_user_id): Observable<any>{
    let data = {}
    return this.http.post<any>(this._accept_user_follow_request_url+user_id+"/"+follower_user_id+"/",data)
  }


  unfollowUser(user_id,following_user_id): Observable<any>{
    return this.http.delete(this._unfollow_follower_url+user_id+"/"+following_user_id+"/")
  }

  removeFollower(user_id,followed_user_id): Observable<any>{
    return this.http.delete(this._remove_follower_url+user_id+"/"+followed_user_id+"/")
  }


  blockedUser(user_id,followed_user_id): Observable<any>{
    let data = {}
    return this.http.post<any>(this._blocked_user_url+user_id+"/"+followed_user_id+"/",data)
  }


  unblockedUser(user_id,followed_user_id): Observable<any>{
    let data = {}
    return this.http.post<any>(this._unblocked_user_url+user_id+"/"+followed_user_id+"/",data)
  }


}
