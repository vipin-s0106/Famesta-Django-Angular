import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service';
import { NotificationService } from '../services/notification.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public LoggedUser;
  public posts;
  public suggestion_user;

  public post_detail;

  constructor(public not_srv: NotificationService,public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService) {
    
   }

  ngOnInit(): void {
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => {this.LoggedUser = res;
        console.log(this.LoggedUser)
        this.post_srv.getAllUserRelatedPost(res.id).subscribe(
          res => {this.posts = res;
            console.log(this.posts);
          },
          err =>{
            console.log(err);
            this._router.navigate(['/dashboard']);
          } 
        );
        this.follower_srv.getUserSuggestion(res.id).subscribe(
          res => {
            console.log(res);
            this.suggestion_user = res;
          },
          err =>{
            console.log(err);
            this._router.navigate(['/dashboard']);
          }
        );

      },
      err => this._router.navigate(['/login'])
    )
    

    
  }

  likePost(user_id,post_id){
    this.post_srv.likePost(user_id,post_id).subscribe(
      res => {
        console.log(res)
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
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }


  getPostLikeDetail(post_id){
    this.post_srv.getLikeViewDetailsOfPost(post_id).subscribe(
      res => {
        this.post_detail = res;
        console.log(this.post_detail)
      },
      err => console.log(err)
    )
  }


}
