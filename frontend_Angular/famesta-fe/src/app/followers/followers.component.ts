import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/user.service';
import { FollowerService } from '../services/follower.service';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public userid;
  public follower_list

  constructor(public usr_srv: UserService,private _router:Router,public follower_srv: FollowerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userid = id;
    this.follower_srv.getFollowersList(this.userid).subscribe(
      res => {
        this.follower_list = res;
        console.log(this.follower_list);
      },
      err => {
        console.log(err)
      }
    );
  }

  remove_Follower(user_id,follower_user_id){
    this.follower_srv.removeFollower(user_id,follower_user_id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

}
