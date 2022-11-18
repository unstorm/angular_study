import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request: HttpRequest<any> = req.clone(
           {
             setHeaders :{
             "x-access-token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyR3JvdXBJZCI6MSwiY29tcGFueUlkIjoxLCJyb2xlSWQiOjEsInRlYW1JZCI6MSwiSWQiOjAsImV4cCI6MTY3MTE1MDA4MiwidXNlcklkIjoiYWRtaW4ifQ.I-mPwfOqE_mzRkazza7vPiKaKshcy4cq_gDyuWLBntQ"
            }
          }
        );   
        
        console.log('do interceptor')
        return next.handle(request).pipe();
    }
}
