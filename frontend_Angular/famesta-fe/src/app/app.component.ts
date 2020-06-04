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
    this.logged_user_id = this.usr_srv.LoggedUserId.subscribe(
      res => {
        this.logged_user_id = res
        this.notification_count = this.not_srv.notification_count.subscribe(
          res => this.notification_count = res
        )
      }
    )
    
  }


}
