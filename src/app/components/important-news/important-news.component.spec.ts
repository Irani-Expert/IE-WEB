import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNewsComponent } from './important-news.component';

describe('ImportantNewsComponent', () => {
  let component: ImportantNewsComponent;
  let fixture: ComponentFixture<ImportantNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantNewsComponent]
    });
    fixture = TestBed.createComponent(ImportantNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
