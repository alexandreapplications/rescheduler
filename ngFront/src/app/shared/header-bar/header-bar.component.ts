import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/infra/services/security.service';

@Component({
    selector: 'rsc-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
    constructor(public security: SecurityService) {}

    ngOnInit() {}
}
