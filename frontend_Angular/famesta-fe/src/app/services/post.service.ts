import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _listStoryUrl: string = "http://127.0.0.1:8000/api/list_all_story/";//append userd id with this url
  private _userSuggestionUrl: string = "http://127.0.0.1:8000/api/followers/suggestion/";//append userd id with this url
  private _list_usr_story: string = "http://127.0.0.1:8000/api/list_user_story/";//append userd id with this url

  constructor(private http: HttpClient) { }

  getAllUserRelatedPost(user_id): Observable<any>{
    return this.http.get(this._listStoryUrl+user_id+"/");
  }


  getUserPost(user_id): Observable<any>{
    return this.http.get(this._list_usr_story+user_id+"/");
  }

  getUserSuggestion(user_id): Observable<any>{
    return this.http.get(this._userSuggestionUrl+user_id+"/")
  }


}
