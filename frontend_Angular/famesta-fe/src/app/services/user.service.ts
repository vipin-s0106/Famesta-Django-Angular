import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public LoggedUserId = new Subject<any>();

  public _base_url = "http://127.0.0.1:8000"
  
  public _updateUserData_url = this._base_url+"/api/user/";  // append user_id/profile/
  private _searchUser_url = this._base_url+"/api/search_user/filter/"; //append the search filter
  private _LoggedUserUrl: string = this._base_url+"/api/loggedUser/";
  private _otherUserProfile_url: string = this._base_url+"/api/otheruser/" //append the username here
  private _otherUserFollowerStatus_url: string = this._base_url+"/api/user/follower_status/" //append the username here
  private _setNewPassword_url = this._base_url+"/api/set_new_password/"
  private _sendResetMail_url = this._base_url+"/api/send_forgot_pwd_mail/"
  private _setForgotPassword_url = this._base_url+"/api/setForgotPasswordWithNewPwd/"
  private _verify_secretURL = this._base_url+"/api/verify_mailSecretKey/"
  private _contact_support_url = this._base_url+"/api/send_contact_mail/"

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

  updateUserInfo(user_id,post_data):Observable <any>{
    return this.http.put<any>(this._updateUserData_url+user_id+"/profile/",post_data)
  }

  search_user(filter_text): Observable<any>{
    return this.http.get(this._searchUser_url+filter_text+"/");
  }

  // getLoggedUserID():any{
  //   let id;

  //   return this.getLoggedUserDetails().subscribe(
  //     map( res => {
  //       console.log(res)
  //     })
  //   )
  // }

  setPassword(data): Observable<any>{
    return this.http.put<any>(this._setNewPassword_url,data)
  }

  sendRestPasswordMail(mail):Observable<any>{
    let data = {"mail":mail}
    return this.http.post<any>(this._sendResetMail_url,data)
  }

  verfiySecretKey(username,secretkey):Observable<any>{
    let data = {"username":username,"secretkey":secretkey}
    return this.http.post<any>(this._verify_secretURL,data)
  }

  setForgotPassword(data):Observable<any>{
    return this.http.put<any>(this._setForgotPassword_url,data)
  }

  sendContactMail(data):Observable<any>{
    return this.http.post<any>(this._contact_support_url,data)
  }

}
