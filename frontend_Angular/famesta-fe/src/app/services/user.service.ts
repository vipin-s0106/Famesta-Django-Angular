import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _base_url = "http://127.0.0.1:8000"
  private _LoggedUserUrl: string = "http://127.0.0.1:8000/api/loggedUser/";
  private _otherUserProfile_url: string = "http://127.0.0.1:8000/api/otheruser/" //append the username here
  private _otherUserFollowerStatus_url: string = "http://127.0.0.1:8000/api/user/follower_status/" //append the username here

  constructor(private http: HttpClient) { }

  getLoggedUserDetails(): Observable<any>{
    return this.http.get(this._LoggedUserUrl);
  }

  getUserProfile(username): Observable<any>{
    return this.http.get(this._otherUserProfile_url+username+"/");
  }

  getFollowerStatus(other_user_id):  Observable<any>{
    return this.http.get(this._otherUserFollowerStatus_url+other_user_id+"/");
  }

}
