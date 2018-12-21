import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, 
           route: ActivatedRouteSnapshot, 
           state: RouterStateSnapshot) {

     return component.canDeactivate ? component.canDeactivate() : true;
  }
} 