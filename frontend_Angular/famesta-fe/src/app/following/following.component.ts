import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/user.service';
import { FollowerService } from '../services/follower.service';
// import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  public userid;
  public following_list;

  constructor(public usr_srv: UserService,private _router:Router,public follower_srv: FollowerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userid = id;
    this.follower_srv.getFollowingList(this.userid).subscribe(
      res => {
        this.following_list = res;
        console.log(this.following_list);
      },
      err => {
        console.log(err)
      }
    );
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
