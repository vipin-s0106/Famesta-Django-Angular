import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importing the component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LogoutComponent } from './logout/logout.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ChatComponent } from './chat/chat.component';

//importing the authguard
import { AuthGuard } from './guard/auth.guard';

//construction of route
const routes: Routes = [
  {path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate: [AuthGuard]
  },
  {path: 'notification',component:NotificationComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'search',component:SearchComponent},
  {path: 'followers',component:FollowersComponent},
  {path: 'following',component:FollowingComponent},
  {path: 'edit-profile',component:EditProfileComponent},
  {path: 'post-detail',component:PostDetailComponent},
  {path: 'chat',component:ChatComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  PageNotFoundComponent,
  LogoutComponent,
  NotificationComponent,
  ProfileComponent,
  SearchComponent,
  FollowersComponent,
  FollowingComponent,
  EditProfileComponent,
  PostDetailComponent,
  ChatComponent,
]
