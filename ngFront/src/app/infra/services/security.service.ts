import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor(public afAuth: AngularFireAuth, public router: Router) {}

    public get isLogged(): boolean {
        return this.afAuth.auth.currentUser != null;
    }

    public doSignOut(): void {
        this.afAuth.auth.signOut().then((value) => {
            this.router.navigate(['~/']);
        });
    }

    public get currentUser(): firebase.UserInfo {
        return this.afAuth.auth.currentUser;
    }

    public getCurrentUser(): firebase.User {
        return this.afAuth.auth.currentUser;
    }
}
