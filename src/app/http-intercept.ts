
import { tap, catchError, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { LoadingService } from "./loading-service";
import { LocalStorage  } from '@ngx-pwa/local-storage';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
}
  from '@angular/common/http';

@Injectable()
export class HttpIntercept implements HttpInterceptor {
  constructor(private loadingService: LoadingService, private router: Router, private localStorage: LocalStorage) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var auth = this.getAuthorization();
    if (auth != undefined) {
      //console.log("auth token set");
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${auth}`
        }
      });
    } else {
      //console.log("auth Token Null");
    }
    this.loadingService.begin(req.url);
    return next.handle(req).pipe(tap(evt => {
      if (evt instanceof HttpResponse) {
        this.loadingService.end(req.url);
      }
    }), catchError((error, caught) => {
      console.log(error);
      this.handleError(error, req);
      return of(error);
    }) as any);
  }
  public getAuthorization(): string {
    var token: any = null;
    var storedToken = this.localStorage.getItem<any>("AuthToken");
    if (storedToken != null) {
        // if (!(storedToken.exp < Date.now() / 1000)) {
            
        // }
        token = storedToken;
    }

    if (token != null) {
        return token.authToken;
    }
    return null;
}

  private handleError(err: HttpErrorResponse, req: HttpRequest<any>): Observable<any> {
    //console.log('handled error ' + err.status);
    if (err.status === 401) {
      this.handleAuthError(err);
    }
    this.loadingService.end(req.url);
    throw err;
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    this.localStorage.removeItem("AuthToken");
    this.router.navigate([`/`]);
    return of(err.message);
  }
}