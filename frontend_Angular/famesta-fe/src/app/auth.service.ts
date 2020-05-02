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

}
