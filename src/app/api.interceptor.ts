import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('WordpressApiInterceptor was called');

        // request.headers.set('Content-Type', 'ABBB');
        // request.headers.set('Access-Control-Allow-Origin', '*');

        const headers = new HttpHeaders({
           'Authorization': 'token 123',
           'WEB-API-key': 'dfsadf',
         'Content-Type': 'application/json'
       });

       const cloneReq = request.clone({headers});


        const clonedRequest = request.clone({
            //headers: request.headers.set('Content-Type', 'BLABLUB')
            headers
        });

        // const clonedRequest = request.clone();

        console.log(clonedRequest);

        return next.handle(clonedRequest);

    }
}
