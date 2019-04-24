import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/infra/services/security.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/infra/services/user.service';
import { FirebaseApp } from '@angular/fire';

@Component({
    selector: 'rsc-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
    constructor(public security: SecurityService, private afAuth: AngularFireAuth) {}

    public info: IUserInfo;

    ngOnInit() {
        // this.afAuth.auth.onAuthStateChanged((user) => {
        //     this.setUserInfo(user);
        // });
        this.security.currentUserObservable.subscribe((user) => {
            this.setUserInfo(user);
        });
    }

    public setUserInfo(user: firebase.User) {
        if (user) {
            this.info = {
                displayName: user.displayName,
                photoURL: user.photoURL,
                isLoggedIn: true,
            };
        } else {
            this.info = { isLoggedIn: false, displayName: null, photoURL: null };
        }
    }

    public doSignOut() {
        this.security.doSignOut();
    }
}

interface IUserInfo {
    isLoggedIn: boolean;
    displayName?: string;
    photoURL?: string;
}
