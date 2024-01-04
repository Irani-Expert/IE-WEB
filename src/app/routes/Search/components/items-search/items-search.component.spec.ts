import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSearchComponent } from './items-search.component';

describe('ItemsSearchComponent', () => {
  let component: ItemsSearchComponent;
  let fixture: ComponentFixture<ItemsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsSearchComponent]
    });
    fixture = TestBed.createComponent(ItemsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
