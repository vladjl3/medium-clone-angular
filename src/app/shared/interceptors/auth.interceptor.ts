import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersistenceService } from '../services/persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get(environment.LS_AUTH_TOKEN_KEY);
    if (!token) {
      return next.handle(req);
    } else {
      const requestWithToken = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
        },
      });
      return next.handle(requestWithToken);
    }
  }
}
