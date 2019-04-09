import { IBasicResponseModel } from './ibasic-response-model';
import { IBasicItemKeyModel } from './ibasic-item-key-model';

export interface IBasicListResponseModel<T> extends IBasicResponseModel {
	data: Array<IBasicItemKeyModel<T>>;
}
