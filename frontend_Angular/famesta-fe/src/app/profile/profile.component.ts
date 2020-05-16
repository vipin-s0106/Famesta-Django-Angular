import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public LoggedUser;
  public posts;
  public followers;
  public followings;
  public background_image;

  constructor(public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService) { }

  ngOnInit(): void {
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => {
        this.LoggedUser = res;
        if(res.profile.background_picture){
          this.background_image = this.getBackgroundImgURL(res.profile.background_picture)
        } 
        console.log(this.LoggedUser)
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
      err => this._router.navigate(['/login'])
    )
   
  }


  getBackgroundImgURL(image_url){
    return this.usr_srv._base_url+image_url
  }

}
