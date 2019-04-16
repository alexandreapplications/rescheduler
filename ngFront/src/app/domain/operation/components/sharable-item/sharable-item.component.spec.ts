import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableItemComponent } from './sharable-item.component';

describe('SharableItemComponent', () => {
  let component: SharableItemComponent;
  let fixture: ComponentFixture<SharableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
