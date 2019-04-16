import { Component, OnInit, Input } from '@angular/core';
import { ISharebleItem } from 'src/app/infra/models/iSharebleItem';

@Component({
    selector: 'rsc-sharable-item',
    templateUrl: './sharable-item.component.html',
    styleUrls: ['./sharable-item.component.scss'],
})
export class SharableItemComponent implements OnInit {
    @Input() item: ISharebleItem;

    constructor() {}

    ngOnInit() {}
}
