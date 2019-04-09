import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/infra/services/domain.service';
import { IDomain } from 'src/app/infra/models/idomain';
import { IBasicListResponseModel } from 'src/app/infra/models/ibasic-list-response-model';
import { IBasicItemKeyModel } from 'src/app/infra/models/ibasic-item-key-model';

@Component({
    selector: 'rsc-user-landing',
    templateUrl: './user-landing.component.html',
    styleUrls: ['./user-landing.component.scss'],
})
export class UserLandingComponent implements OnInit {
    constructor(public domainService: DomainService) {}

    public itemList: Array<IBasicItemKeyModel<IDomain>>;

    ngOnInit() {
        this.domainService
            .getUserDomains()
            .then((value) => {
                if (value.success) {
                    this.itemList = value.data;
                } else {
                    console.log('Erro ao obter dados');
                }
            })
            .catch((reason) => {
                console.error(reason);
            });
    }
}
