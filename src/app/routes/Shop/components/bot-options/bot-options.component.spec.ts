import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotOptionsComponent } from './bot-options.component';

describe('BotOptionsComponent', () => {
  let component: BotOptionsComponent;
  let fixture: ComponentFixture<BotOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotOptionsComponent]
    });
    fixture = TestBed.createComponent(BotOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
