import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  constructor(private route:ActivatedRoute,private router: Router,private usr_srv: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.LoggedUser = this.usr_srv.getLoggedUserDetails().subscribe(
      res => {
        this.LoggedUser = res;
        console.log(this.LoggedUser)
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
  }

  onBackgroundProfileChange(event){
    this.background_uploaded_file = event.target.files[0].name;
    this.background_profile = event.target.files[0]
    console.log(this.background_uploaded_file)
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
          console.log(res),
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
    console.log(this.enabled_button_flag)
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
            console.log(res),
            this.background_uploaded_file="";
            this.ngOnInit();
            this.enabled_button_flag = false;
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
  }
}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
