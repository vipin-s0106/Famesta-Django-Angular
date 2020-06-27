import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FeedService } from './services/feed.service';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';

//importing Authguard
import { AuthGuard } from './guard/auth.guard';

//Imoporting Pipe
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { NotificationCountPipe } from './pipes/notification-count.pipe';


//import material module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { UnAuthorizedComponenetComponent } from './un-authorized-componenet/un-authorized-componenet.component'


import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';

//importing ngPopover
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';






@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    DateAgoPipe,
    ImageUrlPipe,
    NotificationCountPipe,
  ],
  entryComponents:[UnAuthorizedComponenetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    NgxEmojiPickerModule.forRoot(),
    InfiniteScrollModule,
    NgxSpinnerModule,
  ],
  providers: [AuthService,PostService,UserService,NotificationService,ChatService,FollowerService,AuthGuard,FeedService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
