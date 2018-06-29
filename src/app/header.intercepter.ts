import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderIntercepter implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let request=req.clone({
            setHeaders:{
                'Content-Type':'application/octet-stream',
                'Ocp-Apim-Subscription-Key':''
            }
        })

        return next.handle(request);
    }
}