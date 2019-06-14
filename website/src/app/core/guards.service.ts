import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CoreState } from './store';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {
  constructor(private store: Store<CoreState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const authStatus = this.store.pipe(select(s => s.auth.isUserAuthenticated), take(1), tap(isUserAuthenticated => { if (!isUserAuthenticated) this.router.navigate(['/login']) }));

    return authStatus;
  }
}
