import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpEvent,HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpRequest, HttpHandler } from '@angular/common/http'
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs'

import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';


//here we can't direct import the auth service because of cyclic dependecies



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(private injector: Injector,public authService: AuthService) { }

  // intercept(req, next): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
  //   let authService = this.injector.get(AuthService)
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${authService.getToken()}`
  //     }
  //   })
  //   return next.handle(tokenizedReq);
    
    
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getToken()) {
      request = this.addToken(request, this.authService.getToken());
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.doTokenRefresh().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access);
          return next.handle(this.addToken(request, token.access)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              this.authService.removeToken();
            } else {
              return throwError(error);
            }
          }));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }



}
