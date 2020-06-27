import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private _base_url = "http://127.0.0.1:8000"

  private _base_url = environment.apiBaseUrl

  private _listStoryUrl: string = this._base_url+"/api/list_all_story_test/";//append userd id with this url
  private _list_usr_story: string = this._base_url+"/api/list_user_story/";//append userd id with this url
  private _getStoryDetail_url: string = this._base_url+"/api/story/"  //append post id with this url
  private _getCommentList_url: string = this._base_url+"/api/story_comment/"  //append post id with this url
  private _getLikesList_url: string = this._base_url+"/api/story_like/"  //append post id with this url
  private _postComment_url: string = this._base_url+"/api/post_comment/"  //append user_id and post id with this url
  private _deleteComment_url: string = this._base_url+"/api/delete_comment/"  //append user_id and post id with this url
  private _like_post_url: string = this._base_url+"/api/like_post/"  //append user_id and post id with this url
  private _list_likes_detailsOfPost_url: string = this._base_url+"/api/story_like/" //append the post id with this url
  private _delete_post_url:string = this._base_url+"/api/story/" //append the post id with this
  private _postStory_url: string = this._base_url+"/api/post_story/"  //append user id who is posting the story

  constructor(private http: HttpClient) { }

  getAllUserRelatedPost(user_id): Observable<any>{
    return this.http.get(this._listStoryUrl+user_id+"/");
  }

  getNextUserRelatedPost(nextPost_url): Observable<any>{
    return this.http.get(nextPost_url);
  }


  getUserPost(user_id): Observable<any>{
    return this.http.get(this._list_usr_story+user_id+"/");
  }

  postStory(upload_data,user_id):Observable<any>{
    return this.http.post<any>(this._postStory_url+user_id+"/",upload_data)
  }


  getStoryDetailView(post_id): Observable<any>{
    return this.http.get(this._getStoryDetail_url+post_id+"/");
  }


  getCommentList(post_id): Observable<any>{
    return this.http.get(this._getCommentList_url+post_id+"/");
  }

  getLikeList(post_id): Observable<any>{
    return this.http.get(this._getLikesList_url+post_id+"/");
  }

  postComment(user_id,post_id,data): Observable<any>{
    return this.http.post<any>(this._postComment_url+user_id+"/"+post_id+"/",data)
  }

  deleteComment(comment_id): Observable<any>{
    return this.http.delete(this._deleteComment_url+comment_id+"/")
  }

  likePost(user_id,post_id): Observable<any>{
    let data = {'like':true}
    return this.http.post<any>(this._like_post_url+user_id+"/"+post_id+"/",data)
  }

  getLikeViewDetailsOfPost(post_id):Observable<any>{
    return this.http.get(this._list_likes_detailsOfPost_url+post_id+"/")
  }


  deletePost(post_id):Observable<any>{
    return this.http.delete(this._delete_post_url+post_id+"/")
  }

}
