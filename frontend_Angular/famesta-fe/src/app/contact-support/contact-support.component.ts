import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  msg: '';
  color:'';
}


@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.component.html',
  styleUrls: ['./contact-support.component.css']
})
export class ContactSupportComponent implements OnInit {

  public spinnerFlag = false
  public data = {"email":"","msg":"","name":""}

  constructor(public dialog: MatDialog,public usr_srv: UserService) { }

  ngOnInit(): void {
    this.spinnerFlag = false
  }

  sendMail(){
    this.spinnerFlag = true

    this.usr_srv.sendContactMail(this.data).subscribe(
      res =>{
        this.spinnerFlag = false
        let dialogRef = this.dialog.open(DialogDataExampleDialog,{
          data: {msg: "Your msg has been successfully sent, we will get back to you.",color:"green"}
        });
        this.data.email = "";
        this.data.msg = "";
        this.data.name = "";
      },
      err =>{
        this.spinnerFlag = false
        let dialogRef = this.dialog.open(DialogDataExampleDialog,{
          data: {msg: "Something went wrong, please try again after sometime",color:"red"}
        });
        this.data.email = "";
        this.data.msg = "";
        this.data.name = "";
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
