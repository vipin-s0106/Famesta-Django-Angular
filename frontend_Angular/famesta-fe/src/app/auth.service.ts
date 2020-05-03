import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl: string = "http://127.0.0.1:8000/api/register/";
  private _loginUrl: string = "http://127.0.0.1:8000/api/login/";
  private _logout_url: string = "http://127.0.0.1:8000/api/logout/";
  private _refresh_token: string = "http://127.0.0.1:8000/api/token/refresh/";

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any>{
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user): Observable<any>{
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser(data): Observable<any>{
    return this.http.post<any>(this._logout_url,data);
  }

  refreshToken(data): Observable<any>{
    return this.http.post(this._refresh_token,data)
  }

  loggedIn(){
    // !! means that if token present then return true else false
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getRefreshToken(){
    return localStorage.getItem('refresh')
  }


  doTokenRefresh(){
    let refreshToken = this.getRefreshToken()
    console.log(refreshToken)
    let data = {
      'refresh':refreshToken
    }
    let access_token = ""
    this.refreshToken(data).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
