import { Component } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public notification_count;
  public logged_user_id;


  constructor(public usr_srv: UserService,public not_srv: NotificationService,public authSrv: AuthService,private route:ActivatedRoute,private router: Router){
    // if(this.authSrv.loggedIn()){
    //   this.usr_srv.getLoggedUserDetails().subscribe(
    //     res => {
    //       this.logged_user_id = res.id;
    //       this.not_srv.getNotificationCount(res.id).subscribe(
    //         res => {
    //           this.notification_count = res;
    //           this.router.navigate['/dashboard']
    //         },
    //         err => this.router.navigate(['/bad-request'])
    //       )
    //     }
    //   )
    // }
  }


}
