import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationService } from '../services/notification.service';


export interface DialogData {
  msg: '';
  color:'';
}



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public LoggedUser;
  background_profile: File;
  profile_img: File;
  background_uploaded_file: any;
  profile_uploaded_file: any;
  public enabled_button_flag = false;

  post_updated_data = {"BioDescription":"","full_name":"","mobile":"","date_of_birth":"","gender":"","account_type":""}


  public password_data = {"password":"","new_password":"","confirm_new_password":""}
  public typing_confirm_password = false;
  public confirm_new_password_match = false;

  constructor(private route:ActivatedRoute,private router: Router,private usr_srv: UserService,public dialog: MatDialog,public not_srv:NotificationService) { }

  ngOnInit(): void {
    this.LoggedUser = this.usr_srv.getLoggedUserDetails().subscribe(
      res => {
        this.LoggedUser = res;
        // console.log(this.LoggedUser)
        this.post_updated_data.full_name=this.LoggedUser.profile.full_name;
        this.post_updated_data.mobile = this.LoggedUser.profile.mobile;
        this.post_updated_data.date_of_birth = this.LoggedUser.profile.date_of_birth;
        this.post_updated_data.account_type = this.LoggedUser.profile.account_type;
        this.post_updated_data.gender = this.LoggedUser.profile.gender;

        //updating the subject
        // this.usr_srv.LoggedUserId.next(res.id)
        
      },
      err => console.log(err)
    )

    //updating navbar
    this.updateNavBar()
  }

  onBackgroundProfileChange(event){
    this.background_uploaded_file = event.target.files[0].name;
    this.background_profile = event.target.files[0]
    // console.log(this.background_uploaded_file)
    this.enabled_button_flag = true;
  }

  onProfileChange(event){
    this.profile_uploaded_file = event.target.files[0].name;
    this.profile_img = event.target.files[0]
  }

  UserInfoChange(){
    this.enabled_button_flag = true;
  }


  UpdatePublicUserInformation(user_id){
    const uploadData = new  FormData();
    if(this.post_updated_data.BioDescription){
      uploadData.append('BioDescription',this.post_updated_data.BioDescription)
    }
    if (this.profile_uploaded_file){
      uploadData.append('profile_picture',this.profile_img,this.profile_img.name)
    }
    if(this.post_updated_data.BioDescription || this.profile_uploaded_file){
      this.usr_srv.updateUserInfo(user_id,uploadData).subscribe(
        res =>{
          // console.log(res),
          this.post_updated_data.BioDescription ="";
          this.profile_uploaded_file="";
          this.ngOnInit();
          this.dialog.open(DialogDataExampleDialog,{
            data: {
              msg: 'You have successfully updated your Profile',color:"#CCF5AE"
            }
          });
        },
        err => {console.log(err);
          this.dialog.open(DialogDataExampleDialog,{
            data: {
              msg: 'Some error occured while updating your profile',color:"#F5C5AE"
            }
          });
        }
      )
    }
  }


  UpdateUserInformation(user_id){
    // console.log(this.enabled_button_flag)
    if (this.enabled_button_flag){
      const uploadData = new  FormData();
      if(this.post_updated_data.full_name){
        uploadData.append('full_name',this.post_updated_data.full_name)
      }
      if (this.background_uploaded_file){
        uploadData.append('background_picture',this.background_profile,this.background_profile.name)
      }
      if(this.post_updated_data.gender){
        uploadData.append('gender',this.post_updated_data.gender)
      }
      if(this.post_updated_data.date_of_birth){
        uploadData.append('date_of_birth',this.post_updated_data.date_of_birth)
      }
      if(this.post_updated_data.mobile){
        uploadData.append('mobile',this.post_updated_data.mobile)
      }
      if(this.post_updated_data.account_type){
        uploadData.append('account_type',this.post_updated_data.account_type)
      }
      if(this.post_updated_data.full_name || this.background_uploaded_file || this.post_updated_data.gender || this.post_updated_data.mobile 
        || this.post_updated_data.account_type || this.post_updated_data.date_of_birth){
        this.usr_srv.updateUserInfo(user_id,uploadData).subscribe(
          res =>{
            // console.log(res),
            this.background_uploaded_file="";
            this.ngOnInit();
            this.enabled_button_flag = false;
            this.dialog.open(DialogDataExampleDialog,{
              data: {
                msg: 'You have successfully updated your Profile',color:"#CCF5AE"
              }
            });
          },
          err => {
            console.log(err);
            this.dialog.open(DialogDataExampleDialog,{
              data: {
                msg: 'Some error occured while updating your profile',color:"#F5C5AE"
              }
            });
          }
        )
      }
    }
  }

  updateNavBar(){
    this.usr_srv.getLoggedUserDetails().subscribe(
      res => { 
        this.usr_srv.LoggedUserId.next(res.id);
        this.not_srv.getNotificationCount(res.id).subscribe(
          res => this.not_srv.notification_count.next(res.notification_count)
        )
      }
    )
  }

  verfiyConfirmPasswordMatch(){
    this.typing_confirm_password = true;
    if(this.password_data.new_password === this.password_data.confirm_new_password){
      this.confirm_new_password_match = true;
    }
    else{
      this.confirm_new_password_match = false;
    }
  }

  SetNewPassword(){
    if(this.password_data['password'] === this.password_data['new_password']){
      this.dialog.open(DialogDataExampleDialog,{
        data: {
          msg: "New password can't be same with past password",
          color:"tomato"
        }
      });
    }
    else if(this.password_data['new_password'] != this.password_data['confirm_new_password']){
      this.dialog.open(DialogDataExampleDialog,{
        data: {
          msg: "Confirm password does not match with new password",
          color:"tomato"
        }
      });
    }
    else{
      this.usr_srv.setPassword(this.password_data).subscribe(
        res => {
          this.dialog.open(DialogDataExampleDialog,{
            data: {
              msg: 'You Password has been successfully changed 😇',color:"green"
            }
          });
        },
        error =>{
          console.log(error)
          this.dialog.open(DialogDataExampleDialog,{
            data: {
              msg: error.error.error,
              color:"tomato"
            }
          });
        }
      )
    }
  }


}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
