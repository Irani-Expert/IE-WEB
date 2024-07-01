import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingNeedsBannerComponent } from './counseling-needs-banner.component';

describe('CounselingNeedsBannerComponent', () => {
  let component: CounselingNeedsBannerComponent;
  let fixture: ComponentFixture<CounselingNeedsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounselingNeedsBannerComponent]
    });
    fixture = TestBed.createComponent(CounselingNeedsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
