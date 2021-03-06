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
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';
import { UnAuthorizedComponenetComponent } from './un-authorized-componenet/un-authorized-componenet.component';
import { FeedComponent } from './feed/feed.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';

//importing the authguard
import { AuthGuard } from './guard/auth.guard';

//construction of route
const routes: Routes = [
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch:'full',
  },
  {
    path:'contact',
    component:ContactSupportComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
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
  {
    path: 'notification/:id',
    component:NotificationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component:SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'followers/:id',
    component:FollowersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'following/:id',
    component:FollowingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    component:EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post-detail/:id',
    component:PostDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component:ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat/:username',
    component:ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:username',
    component:OtherUserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feed',
    component:FeedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changepassowrd/:username/:secretkey',
    component:ForgotPasswordComponent,
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
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
  OtherUserProfileComponent,
  UnAuthorizedComponenetComponent,
  FeedComponent,
  ForgotPasswordComponent,
  ContactSupportComponent
]
