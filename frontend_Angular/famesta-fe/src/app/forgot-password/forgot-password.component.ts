import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface DialogData {
  msg: '';
  color:'';
}


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public data = {"username":"","password":"","secretkey":""}
  public data1 = {"confirm_password":""};
  public confirm_new_password_match;
  public typing_confirm_password = false;
  public verify_flag = false;
  public secretkey;

  constructor(public dialog: MatDialog,public usr_srv: UserService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let secret_key = this.route.snapshot.paramMap.get('secretkey');
    let username = this.route.snapshot.paramMap.get('username');
    console.log(secret_key)
    console.log(username)
    //verify the secret key with backend
    if(!this.verify_flag){
      this.usr_srv.verfiySecretKey(username,secret_key).subscribe(
        res =>{
          this.verify_flag = true;
          this.data.secretkey = secret_key;
          console.log("Key Verified")
        },
        err =>{
          let dialogRef = this.dialog.open(DialogDataExampleDialog,{
            data: {msg: err.error.error,color:"red"}
          });
          dialogRef.afterClosed().subscribe(result => {
            this._router.navigate(['/login'])
          });
        }
      )
    }
  }

  check_confirm_password(){
    this.typing_confirm_password = true
    if (this.data.password === this.data1.confirm_password){
      this.confirm_new_password_match = true
    }
  }


  setPassword(secretkey){
    this.data.secretkey = secretkey
    console.log(this.data)
    this.usr_srv.setForgotPassword(this.data).subscribe(
      res => {
        console.log(res)
        let dialogRef = this.dialog.open(DialogDataExampleDialog,{
          data: {msg: 'Your password has been successfully set',color:"green"}
        });
        dialogRef.afterClosed().subscribe(result => {
          this._router.navigate(['/login'])
        });
      },
      err =>{
        console.log(err)
        let dialogRef = this.dialog.open(DialogDataExampleDialog,{
          data: {msg: err.error.error,color:"red"}
        });
        dialogRef.afterClosed().subscribe(result => {
          this._router.navigate(['/login'])
        });
      }
    )
  }


}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}