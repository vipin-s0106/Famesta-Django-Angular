import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_credential = {'username':'','password':''}
  public success_message;
  public failure_message;

  constructor(private _auth: AuthService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this._auth.loginUser(this.user_credential).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.access);
        localStorage.setItem('refresh',res.refresh);
        this.router.navigate(['/dashboard']);
      },
      err => this.failure_message = err
    )
    
  }

}
