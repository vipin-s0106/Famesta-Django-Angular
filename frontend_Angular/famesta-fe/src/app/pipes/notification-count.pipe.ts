import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import {map} from 'rxjs/operators'

@Pipe({
  name: 'notificationCount',
  pure: true
})
export class NotificationCountPipe implements PipeTransform {

  public count

  constructor(public usr_srv:UserService,public not_srv: NotificationService){}

  transform(value: unknown, ...args: unknown[]): any {
    let count = 0
    
    // this.count  = this.not_srv.getNotificationCount1(27).map(
    //   result =>{
    //       console.log(result) 
    //       result.json();
    //   }
    // );
      
    return this.count
  }

}
