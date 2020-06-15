import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_credential = {'username':'','password':''}
  public success_message;
  public failure_message;


  public resetModalFalg;
  public msg = ""
  public msg_color;
  public user_mail;

  public spinner_display = false;



  constructor(private _auth: AuthService,private route:ActivatedRoute,private router: Router,private usr_srv:UserService) { }

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

  ResetTheModal(){
    this.resetModalFalg = true
  }

  sendMail(){
    this.resetModalFalg = false
    // this.msg = "Mail hase been successfully sent to the user with reset password steps."
    // this.msg_color = "green"
    this.spinner_display = true;
    this.usr_srv.sendRestPasswordMail(this.user_mail).subscribe(
      res => {
        this.spinner_display = false;
        console.log(res)
        this.msg = res.msg;
        this.msg_color = "green"
        
      },
      err => {
        this.spinner_display = false;
        console.log(err)
        this.msg = err.error.error
        this.msg_color = "red"
      }
    )
  }

  clearSuccessMsg(){
    this.success_message = ""
  }

}
