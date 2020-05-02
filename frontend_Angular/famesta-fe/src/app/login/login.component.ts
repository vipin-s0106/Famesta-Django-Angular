import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_credential = {'username':'','password':''}
  public success_message;
  public failure_message;

  constructor(private _auth: AuthService,private route:ActivatedRoute,private router: Router,public app_com: AppComponent) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this._auth.loginUser(this.user_credential).subscribe(
      res => this.navigationToDashboard(res),
      err => this.failure_message = err
    )
    
  }

  //navigate user to dashboard if he is login
  navigationToDashboard(res){
    this.app_com.loggedIn = true;
    console.log(this.app_com.loggedIn)
    this.router.navigate(['/dashboard'],{relativeTo:this.route})
  }

}
