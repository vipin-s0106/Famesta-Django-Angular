import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service'
import { NotificationService } from '../services/notification.service';



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

  public new_post_file;
  public upload_post_file: File;
  public new_post_data = {"post_info":""}

  toggled: boolean = false;


  constructor(public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService,public not_srv:NotificationService) { }

  ngOnInit(): void {
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => {
        this.LoggedUser = res;
        if(res.profile.background_picture){
          this.background_image = this.getBackgroundImgURL(res.profile.background_picture)
        } 
        // console.log(this.LoggedUser)
        this.post_srv.getUserPost(res.id).subscribe(
          res => {
            this.posts = res;
            // console.log(this.posts);
          },
          err =>{
            console.log(err);
            this._router.navigate(['/dashboard']);
          } 
        );
        this.follower_srv.getFollowersList(res.id).subscribe(
          res => {
            this.followers = res;
            // console.log(this.followers)
          },
          err => {
            console.log(err);
            this._router.navigate(['/dashboard']);
          }

        );
        this.follower_srv.getFollowingList(res.id).subscribe(
          res => {
            this.followings = res;
            // console.log(this.followings)
          },
          err => {
            console.log(err);
            this._router.navigate(['/dashboard']);
          }

        );

      },
      err => this._router.navigate(['/login'])
    )
   
    //updating navbar
    this.updateNavBar()
  }


  handleSelection(event) {
    this.new_post_data.post_info += event.char;
  }



  getBackgroundImgURL(image_url){
    return image_url
  }

  remove_Follower(user_id,follower_user_id){
    this.follower_srv.removeFollower(user_id,follower_user_id).subscribe(
      res => {
        // console.log(res);
        this.ngOnInit();
      },
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


  deletePost(post_id){
    this.post_srv.deletePost(post_id).subscribe(
      res => this.ngOnInit(),
      err => console.log(err)
    )
  }

  onNewPostFileChange(event){
    this.new_post_file = event.target.files[0].name;
    this.upload_post_file = event.target.files[0];
  }


  addPost(user_id){
    const uploadData = new  FormData();
    uploadData.append('post_info',this.new_post_data.post_info)
    uploadData.append('file',this.upload_post_file,this.upload_post_file.name)
    this.post_srv.postStory(uploadData,user_id).subscribe(
      res => {
        // console.log(res);
        this.new_post_file = null;
        this.ngOnInit();
      },
      err => console.log(err)
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


  updateNavBar(){
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => { 
        this.usr_srv.LoggedUserId.next(res.id);
        this.not_srv.getNotificationCount(res.id).subscribe(
          res => this.not_srv.notification_count.next(res.notification_count)
        )
      }
    )
  }


}
