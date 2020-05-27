import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { FollowerService } from '../services/follower.service';
import { NotificationService } from '../services/notification.service';

import { UnAuthorizedComponenetComponent } from '../un-authorized-componenet/un-authorized-componenet.component'


import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public notifications;
  public followe_request_list = new Array();
  public user_id;

  constructor(public dialog: MatDialog,public not_srv: NotificationService,public usr_srv: UserService,private _router:Router,public post_srv: PostService,public follower_srv: FollowerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user_id = id;
    this.not_srv.getUserNotification(this.user_id).subscribe(
      res => {
        this.notifications = res;
        console.log(this.notifications);
      },
      err => {
        console.log(err);
        if (err.status === 403){
          let dialogRef = this.dialog.open(UnAuthorizedComponenetComponent);
          dialogRef.afterClosed().subscribe(result => {
            this._router.navigate(['/dashboard'])
          });
        }
      }
    )
  }


  loadDataAgain(){
    this.not_srv.getUserNotification(this.user_id).subscribe(
      res => {
        this.notifications = res;
        console.log(this.notifications);
      },
      err => {
        if (err.status === 403){
          let dialogRef = this.dialog.open(UnAuthorizedComponenetComponent);
          dialogRef.afterClosed().subscribe(result => {
            this._router.navigate(['/dashboard'])
          });
        }
      }
    )
  }



  deleteNotification(notification_id){
    this.not_srv.deleteNotification(notification_id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

  deleteAllUserNotification(user_id){
    this.not_srv.deleteAllNotification(user_id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

  acceptFollowRequest(user_id,follower_user_id,notification_id){
    this.follower_srv.acceptUserRequest(user_id,follower_user_id).subscribe(
      res => {
        this.deleteNotification(notification_id);
      },
      err => console.log(err)
    )
  }


  declineRequest(notification_id){
    this.deleteNotification(notification_id);
    this.loadDataAgain()
  }

}
