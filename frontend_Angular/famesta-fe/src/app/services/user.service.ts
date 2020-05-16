import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _base_url = "http://127.0.0.1:8000"
  private _LoggedUserUrl: string = "http://127.0.0.1:8000/api/loggedUser/";

  constructor(private http: HttpClient) { }

  getLoggedUserDetails(): Observable<any>{
    return this.http.get(this._LoggedUserUrl);
  }


}
