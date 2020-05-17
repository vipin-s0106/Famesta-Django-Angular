import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user_id: any;
  file_name: any;
  profile_img: any;

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user_id = id;
    console.log(this.user_id)
  }


  

  onFileChange(event){
    this.file_name = event.target.files[0].name;
    // here you can take more action like reading content, etc
  }

  onProfileChange(event){
    this.profile_img = event.target.files[0].name;
    // here you can take more action like reading content, etc
  }

}
