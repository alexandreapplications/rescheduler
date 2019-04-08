import { TestBed } from '@angular/core/testing';

import { ResourceItemService } from './resource-item.service';

describe('ResourceItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceItemService = TestBed.get(ResourceItemService);
    expect(service).toBeTruthy();
  });
});
