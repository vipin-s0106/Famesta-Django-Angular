import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public LoggedUser;

  constructor(public usr_srv: UserService,private _router:Router) {
    
   }

  ngOnInit(): void {
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => {this.LoggedUser = res
        console.log(this.LoggedUser)
      },
      err => this._router.navigate(['/login'])
    )
  }



}
