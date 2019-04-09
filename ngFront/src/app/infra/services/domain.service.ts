import { Injectable } from '@angular/core';
import { IBasicListResponseModel } from '../models/ibasic-list-response-model';
import { IDomain } from '../models/idomain';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DomainService {
    constructor(private http: HttpClient) {}

    public getUserDomains(): Promise<IBasicListResponseModel<IDomain>> {
        return this.http.get<IBasicListResponseModel<IDomain>>(environment.webapi.domain).toPromise();
    }
}
