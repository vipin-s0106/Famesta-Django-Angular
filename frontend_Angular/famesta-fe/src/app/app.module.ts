import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

//Importing RoutingComponenet so Normal Componenet automatically imported
import { RoutingComponent } from './app-routing.module';

//import services
import { AuthService } from './auth.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './token-interceptor.service';

//importing Authguard
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,PostService,UserService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
