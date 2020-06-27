import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service';
import { NotificationService } from '../services/notification.service'
import { FormControl } from '@angular/forms';

import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { AppComponent } from '../app.component';

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  public LoggedUser;

  public posts;
  public next_posturl;
  public notEmptyPost=true;
  public notscrolly=true;

  public suggestion_user;
  public notification_count;

  

  public post_detail;

  public search_input;
  public searched_user;

  constructor(public spinner:NgxSpinnerService,public not_srv: NotificationService,public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService) {}

  ngOnInit(): void {

    this.usr_srv.getLoggedUserDetails().subscribe(
      res => {
        this.LoggedUser = res;

        //this line for to passing the user id to subject so that it can be used by other component
        this.usr_srv.LoggedUserId.next(res.id)


        // console.log(this.LoggedUser)
        this.post_srv.getAllUserRelatedPost(res.id).subscribe(
          res => {
            // console.log(res);
            this.posts = res.results;
            this.next_posturl = res.next
          },
          err =>{
            // console.log(err);
            this._router.navigate(['/dashboard']);
          } 
        );
        this.follower_srv.getUserSuggestion(res.id).subscribe(
          res => {
            // console.log(res);
            this.suggestion_user = res;
          },
          err =>{
            console.log(err);
            this._router.navigate(['/dashboard']);
          }
        );
        this.not_srv.getNotificationCount(res.id).subscribe(
          res => {
            // console.log(res);
            this.notification_count = res;

            //this is also for the subject to pass on navbar
            this.not_srv.notification_count.next(res.notification_count)
          },
          err => console.log(err)
        )

      },
      err => this._router.navigate(['/login'])
    );
    
  }

  onScroll(nextPostURL){
    if (this.notscrolly && this.notEmptyPost) {
      // console.log(nextPostURL)
      this.spinner.show();
      this.notscrolly = false;
      if (nextPostURL){
        this.loadNextPost(nextPostURL);
      }
      else{
        this.spinner.hide();
      }
      
    }
    
  }

  loadNextPost(nextPostURL){
    this.post_srv.getNextUserRelatedPost(nextPostURL).subscribe(
      res =>{
        let new_posts = res.results;
        this.next_posturl = res.next

        this.spinner.hide();

        if (new_posts.length === 0){
            this.notEmptyPost = false;
            this.notscrolly = false;
        }
        this.posts = this.posts.concat(new_posts);
        this.notscrolly = true;
      }
    )
  }



  public checkFileisVideo(filename:string){
    let extension  = filename.split('?')[0].split('.').pop()
    extension = extension.toLowerCase()
    if( extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif"){
      return true
    }
    return false
  }

  public search_user(): any{
    this.usr_srv.search_user(this.search_input).subscribe(
      res => {
        this.searched_user = res
      },
      err => this.searched_user=null
    )
  }


  likePost(user_id,post_id){
    this.post_srv.likePost(user_id,post_id).subscribe(
      res => {
        // console.log(res)
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

  followUser(user_id,follower_user_id,user_name){
    let postData = {"message":user_name+" has requested to follow you","notification_type":"follow","other_user":follower_user_id}
    console.log(postData)
    this.not_srv.createFollowRequest(user_id,postData).subscribe(
      res => this.ngOnInit(),
      err => console.log(err)
    )
  }

  unfollowUser(user_id,following_user_id){
    this.follower_srv.unfollowUser(user_id,following_user_id).subscribe(
      res => {
        // console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }


  getPostLikeDetail(post_id){
    this.post_srv.getLikeViewDetailsOfPost(post_id).subscribe(
      res => {
        this.post_detail = res;
        // console.log(this.post_detail)
      },
      err => console.log(err)
    )
  }


}
