import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor(private afAuth: AngularFireAuth, private router: Router) {
        afAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                debugger;
                this.isLogged = true;
                this.doReturnAsLogged();
            } else {
                this.isLogged = false;
                this.doNavigateToLogin();
            }
        });
    }

    private _currentRoute: string;

    public isLogged = false;

    public doReturnAsLogged() {
        if (this._currentRoute) this.router.navigateByUrl(this._currentRoute);
    }

    public doNavigateToLogin() {
        this._currentRoute = this.router.routerState.snapshot.url;
        // No user is signed in.
        this.router.navigate(['/security', 'login']);
    }

    public doFacebookLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.FacebookAuthProvider();
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
            let provider = new firebase.auth.GoogleAuthProvider();
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
