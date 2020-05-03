import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

//here we can't direct import the auth service because of cyclic dependecies



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private injector: Injector) { }

  intercept(req, next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
    // .catch(err => {
    //   console.log(err)
    //   if (err.status === 401 || err.status === 403) {
    //     let refreshToken = authService.getRefreshToken()
    //     console.log(refreshToken)
    //     let data = {
    //       'refresh':refreshToken
    //     }
    //     let access_token = ""
    //     authService.refreshToken(data).subscribe(
    //       res => console.log(res),
    //       err => console.log(err)
    //     )
    //   }
    // });

  }

}
