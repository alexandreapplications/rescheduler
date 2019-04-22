import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, UrlSegment } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor(private afAuth: AngularFireAuth, private router: Router) {
        afAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
        });
    }

    private _currentRoute: UrlSegment[];

    public isLogged = false;

    public doSetNextRouteUrl(routeUrl: UrlSegment[]) {
        this._currentRoute = routeUrl;
    }

    get currentUserObservable(): Observable<firebase.User> {
        return this.afAuth.authState;
    }

    public doReturnAsLogged() {
        if (this._currentRoute) {
            this.router.navigateByUrl('me');
        }
    }

    public doNavigateToLogin() {
        this.router.navigate(['/security', 'signin']);
    }

    public doFacebookLogin() {
        return new Promise<any>((resolve, reject) => {
            const provider = new firebase.auth.FacebookAuthProvider();
            // provider.addScope('user_birthday');
            this.afAuth.auth.signInWithPopup(provider).then(
                (res) => {
                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err);
                },
            );
        });
    }

    public doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth.signInWithPopup(provider).then((res) => {
                resolve(res);
            });
        });
    }

    public doSignInEmailAndPassword(email: string, password: string) {
        return new Promise<any>((resolve, reject) => [
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
                resolve(res);
            }),
        ]);
    }

    public doRegister(value) {
        return new Promise<any>((resolve, reject) => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(value.email, value.password)
                .then(
                    (res) => {
                        resolve(res);
                    },
                    (err) => reject(err),
                );
        });
    }

    public doSignOut(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.afAuth.auth
                .signOut()
                .then(() => {
                    resolve();
                })
                .catch((reason) => {
                    reject(reason);
                });
        });
    }

    public get currentUser(): firebase.UserInfo {
        return this.afAuth.auth.currentUser;
    }

    public getCurrentUser(): firebase.User {
        return this.afAuth.auth.currentUser;
    }
}
