import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFacilitiesComponent } from './bot-facilities.component';

describe('BotFacilitiesComponent', () => {
  let component: BotFacilitiesComponent;
  let fixture: ComponentFixture<BotFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotFacilitiesComponent]
    });
    fixture = TestBed.createComponent(BotFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
