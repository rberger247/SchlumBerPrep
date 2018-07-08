import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent  } from "./form/form.component";


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

 export class CanDeactivateGuard implements CanDeactivate<FormComponent> {

  canDeactivate(component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.dialogService.confirm('')
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService {

  constructor() { }

  canDeActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    // redirect and return false
    if (1 + 1 == 2) {
    return true;
    }
    else

    return false;

  }
}
