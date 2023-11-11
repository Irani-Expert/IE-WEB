import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotShowcaseComponent } from './bot-showcase.component';

describe('BotShowcaseComponent', () => {
  let component: BotShowcaseComponent;
  let fixture: ComponentFixture<BotShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotShowcaseComponent]
    });
    fixture = TestBed.createComponent(BotShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
