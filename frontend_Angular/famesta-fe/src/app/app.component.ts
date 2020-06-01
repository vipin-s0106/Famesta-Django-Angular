import { Component } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authSrv: AuthService,private route:ActivatedRoute,private router: Router){
  }


}
