import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
    selector: 'rsc-logon',
    templateUrl: './logon.component.html',
    styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth) {}

    public logonForm: FormGroup;

    ngOnInit() {
        this.logonForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    public doGoogleSignIn() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    public doSubmit() {
        if (this.logonForm.valid) {
            this.afAuth.auth.signInWithEmailAndPassword(this.logonForm.value.email, this.logonForm.value.password);
        }
    }
}
