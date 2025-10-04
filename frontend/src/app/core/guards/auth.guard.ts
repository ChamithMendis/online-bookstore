import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authToken = this.authService.getAuthToken();
    if (authToken) {
      return true;
    }
    this.router.navigate(['/authentication/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
