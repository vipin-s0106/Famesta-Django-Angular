import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

//Importing RoutingComponenet so Normal Componenet automatically imported
import { RoutingComponent } from './app-routing.module';

//import services
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { FollowerService } from './services/follower.service';
import { NotificationService } from './services/notification.service';
import { ChatService } from './services/chat.service';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';

//importing Authguard
import { AuthGuard } from './guard/auth.guard';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//import material module
import { MaterialModule } from './material/material.module';


import { UnAuthorizedComponenetComponent } from './un-authorized-componenet/un-authorized-componenet.component'



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    DateAgoPipe,
    ImageUrlPipe,
  ],
  entryComponents:[UnAuthorizedComponenetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AuthService,PostService,UserService,NotificationService,ChatService,FollowerService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
