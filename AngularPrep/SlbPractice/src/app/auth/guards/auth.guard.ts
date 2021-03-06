import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
  private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    // redirect and return false
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['NotFound']);
      return false;
    }
    else

    return true;

  }


}
