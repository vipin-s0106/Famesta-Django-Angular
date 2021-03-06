import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public data = {}

  constructor(private _auth: AuthService,private app_com_obj:AppComponent,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    this._auth.logoutUser(this.data).subscribe(
      res => {
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/login'])
      }
    )
    
  }

}
