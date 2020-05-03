import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUserData = {'username':'','email':'','password':'','confirm_password':''}; 
  public registeruserMessage;
  public register_message_color;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {

  }

  registerUser(){
    this._auth.registerUser(this.registerUserData).subscribe(
      res => this.DisplaySuccessUserMessage(res),
      err => this.DisplaySuccessUserMessage(err)
    )
  }

  DisplaySuccessUserMessage(msg){
    if ('error' in msg){
      this.registeruserMessage = msg['error']['error'];
      this.register_message_color="Tomato";
    }
    else{
      this.registeruserMessage = "You have succefully registered with us.";
      this.register_message_color="orange";
    }
    
  }

}
