import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // request interceptor
    let clonedRequest;
    if (req.url.includes('product')) {
      clonedRequest = req.clone({
        params: new HttpParams().set('ts_interceptor', Date.now().toString()),
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest).pipe(
      // response interceptor
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response
          if (event.url.includes('product')) {
            const time = +Date.now().toString() - clonedRequest.params.get('ts_interceptor');
            console.log(`${time} ms, time of response`);
          }
          return event;
        }
      }),
    );
  }
}
