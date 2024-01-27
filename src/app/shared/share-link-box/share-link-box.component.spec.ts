import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLinkBoxComponent } from './share-link-box.component';

describe('ShareLinkBoxComponent', () => {
  let component: ShareLinkBoxComponent;
  let fixture: ComponentFixture<ShareLinkBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareLinkBoxComponent]
    });
    fixture = TestBed.createComponent(ShareLinkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
