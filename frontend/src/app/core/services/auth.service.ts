import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../shared/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(regFormDetails: User) {
    const requestUrl = environment.baseUrl + '/register';

    return this.http.post(requestUrl, regFormDetails);
  }

  login(loginFormDetails: Login) {
    const requestUrl = environment.baseUrl + '/login';

    return this.http.post(requestUrl, loginFormDetails);
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem('auth_token', JSON.stringify(token));
    } else {
      window.localStorage.removeItem('auth_token');
    }
  }

  getAuthToken(): string | null {
    return JSON.parse(window.localStorage.getItem('auth_token') as string);
  }
}
