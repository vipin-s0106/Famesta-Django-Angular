import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post_id;
  public post;
  public LoggedUser;

  public postData = {"comment":""}

  toggled: boolean = false;

  constructor(public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService,public not_srv: NotificationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.post_id = id;
    this.post_srv.getStoryDetailView(this.post_id).subscribe(
      res => {
        // console.log(res);
        this.post = res;
        this.usr_srv.getLoggedUserDetails().subscribe(
          res => {
            this.LoggedUser = res;
            // console.log(this.LoggedUser);
          },
          err => console.log(err)
        )
        
      },
      err => console.log(err)
    )

    //updating to navbar
    this.updateNavBar()
  }

  handleSelection(event) {
    this.postData.comment += event.char;
  }

  loadScript(){
    var commentBody = document.getElementById('commentBody');
    commentBody.scrollTop = commentBody.scrollHeight - commentBody.clientHeight;
  }

  public checkFileisVideo(filename:string){
    let extension  = filename.split('?')[0].split('.').pop()
    extension = extension.toLowerCase()
    if( extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif"){
      return true
    }
    return false
  }

  postComment(user_id,post_id){
    // console.log(this.postData)
    if (this.postData.comment.length >= 1){
      this.post_srv.postComment(user_id,post_id,this.postData).subscribe(
        res => {
          // console.log(res);
          this.ngOnInit()
        },
        err => console.log(err)
  
      )
    }
    
  }

  followUser(user_id,follower_user_id,user_name){
    let postData = {"message":user_name+" has requested to follow you","notification_type":"follow","other_user":follower_user_id}
    // console.log(postData)
    this.not_srv.createFollowRequest(user_id,postData).subscribe(
      res => this.ngOnInit(),
      err => console.log(err)
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

  checkCommentPresent(commentData){
    let count = 0
    for (var comment of commentData){
      if(comment.comment != null){
        count ++;
        break
      }
    }
    if (count > 0){
      return true
    }
    else{
      return false
    }
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
