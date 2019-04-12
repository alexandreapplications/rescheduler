import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'rsc-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth) {}

    public logonForm: FormGroup;

    ngOnInit() {
        this.logonForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }
}
