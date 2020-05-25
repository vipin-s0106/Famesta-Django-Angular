import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service'
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.css']
})
export class OtherUserProfileComponent implements OnInit {

  public User;
  public posts;
  public followers;
  public followings;
  public background_image;
  public username;
  public userFollowerStatus;
  public LoggedUser;


  constructor(public usr_srv: UserService,private _router:Router,public not_srv: NotificationService,public post_srv: PostService,public follower_srv: FollowerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.username = username;
    this.usr_srv.getUserProfile(username).subscribe(
      res => {
        // console.log(res);
        this.User = res;
        if(res.profile.background_picture){
          this.background_image = this.getBackgroundImgURL(res.profile.background_picture)
        } 
        this.usr_srv.getFollowerStatus(res.id).subscribe(
          res => {
            this.userFollowerStatus = res;
            console.log(this.userFollowerStatus)
          },
          err => console.log(err)
        );
        this.usr_srv.getLoggedUserDetails().subscribe(
          res => this.LoggedUser = res,
          err => console.log(err)
        );
        // console.log(this.User)
        this.post_srv.getUserPost(res.id).subscribe(
          res => {
            this.posts = res;
            console.log(this.posts);
          },
          err =>{
            console.log(err);
            this._router.navigate(['/dashboard']);
          } 
        );
        this.follower_srv.getFollowersList(res.id).subscribe(
          res => {
            this.followers = res;
            console.log(this.followers)
          },
          err => {
            console.log(err);
            this._router.navigate(['/dashboard']);
          }

        );
        this.follower_srv.getFollowingList(res.id).subscribe(
          res => {
            this.followings = res;
            console.log(this.followings)
          },
          err => {
            console.log(err);
            this._router.navigate(['/dashboard']);
          }

        );

      },
      err => console.log(err)
    )
  }

  getBackgroundImgURL(image_url){
    return this.usr_srv._base_url+image_url
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


}
