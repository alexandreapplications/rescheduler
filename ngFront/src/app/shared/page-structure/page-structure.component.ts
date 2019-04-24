import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rsc-page-structure',
    templateUrl: './page-structure.component.html',
    styleUrls: ['./page-structure.component.scss'],
})
export class PageStructureComponent implements OnInit {
    @Input() title: string;

    events: string[] = [];
    opened = true;
    constructor() {}

    ngOnInit() {}
}
