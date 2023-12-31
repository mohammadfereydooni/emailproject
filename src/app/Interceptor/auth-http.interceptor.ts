import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifyrequest = request.clone({
      withCredentials:true,
    })
    return next.handle(modifyrequest).pipe(
      tap((value)=>{


        if(value.type === HttpEventType.Sent){
          // console.log('sent');

        }
        else if(value.type === HttpEventType.Response){


          // console.log('Response');

        }

      })
    );
  }
}
