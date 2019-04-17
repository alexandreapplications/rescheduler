import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { SecurityService } from 'src/app/infra/services/security.service';

@Component({
    selector: 'rsc-logon',
    templateUrl: './logon.component.html',
    styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private securityService: SecurityService) {}

    public logonForm: FormGroup;

    ngOnInit() {
        this.logonForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    public doGoogleSignIn() {
        this.securityService.doGoogleLogin().then((res) => {});
    }

    public doSubmit() {
        if (this.logonForm.valid) {
            this.securityService.doSignInEmailAndPassword(this.logonForm.value.email, this.logonForm.value.password);
        }
    }
}
