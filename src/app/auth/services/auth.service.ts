import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentUserInterface } from '@app/shared/types/currentUser.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  public register(
    data: RegisterRequestInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiBaseUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiBaseUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  public getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiBaseUrl + '/user';
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }
}
