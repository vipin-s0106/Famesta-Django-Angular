import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public LoggedUser;
  public posts;
  public suggestion_user;

  constructor(public usr_srv: UserService,private _router:Router,public post_srv: PostService) {
    
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
        this.post_srv.getUserSuggestion(res.id).subscribe(
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



}
