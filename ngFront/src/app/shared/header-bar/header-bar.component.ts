import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/infra/services/security.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'rsc-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
    constructor(public security: SecurityService, private afAuth: AngularFireAuth) {
        console.log(security.isLogged);
        afAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.info = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    isLoggedIn: true,
                };
            } else {
                this.info = { isLoggedIn: false };
            }
        });
    }

    public info;

    ngOnInit() {}

    public doSignOut() {
        this.security.doSignOut();
    }
}
