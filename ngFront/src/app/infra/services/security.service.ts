import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class SecurityService {
    constructor(public afAuth: AngularFireAuth) {}

    public async isLogged(): Promise<boolean> {
        return true;
        let response = false;
        let dados = await this.afAuth.user.toPromise();
        return dados != null;
    }
}
