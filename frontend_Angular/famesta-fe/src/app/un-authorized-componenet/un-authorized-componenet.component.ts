import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-un-authorized-componenet',
  templateUrl: './un-authorized-componenet.component.html',
  styleUrls: ['./un-authorized-componenet.component.css']
})
export class UnAuthorizedComponenetComponent implements OnInit {

  constructor(public not_srv:NotificationService,public usr_srv:UserService) { }

  ngOnInit(): void {
    //updating navbar
    this.updateNavBar()
  }

  updateNavBar(){
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => { 
        this.usr_srv.LoggedUserId.next(res.id);
        this.not_srv.getNotificationCount(res.id).subscribe(
          res => this.not_srv.notification_count.next(res.notification_count)
        )
      },
      err =>{
        console.log(err)
      }
    )
  }


}
