import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { SecurityService } from '../services/security.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private security: SecurityService, public router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise<boolean>((resolve) => {
            this.security.currentUserObservable.subscribe((value) => {
                if (value) {
                    resolve(true);
                } else {
                    this.router.navigate(['/security', 'signin']);
                    resolve(false);
                }
            });
        });
        // if (this.security.isLogged) {
        //     return true;
        // }
        // let result = true;
        // this.security.currentUserObservable
        //     .pipe(
        //         take(1),
        //         map((user) => !!user),
        //         tap((loggedIn) => {
        //             if (!loggedIn) {
        //                 console.log('access denied');
        //                 this.router.navigate(['/security', 'signin']);
        //             }
        //         }),
        //     )
        //     .subscribe((x) => {
        //         result = x;
        //     });
        // return result;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
