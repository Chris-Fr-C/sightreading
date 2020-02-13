import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentSelectedGuard implements CanActivate {

  constructor(private context:ContextService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let can:boolean = this.context.isInstrumentSelected();
    if (!can){
      this.router.navigate(['']); // Going back to menu
    }

    return can;
  }
  
}
