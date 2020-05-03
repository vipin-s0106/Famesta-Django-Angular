import { Component } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedInUser;

  constructor(private _authSrv: AuthService,private route:ActivatedRoute,private router: Router){}

}
