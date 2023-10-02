import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAdvantagesComponent } from './bot-advantages.component';

describe('BotAdvantagesComponent', () => {
  let component: BotAdvantagesComponent;
  let fixture: ComponentFixture<BotAdvantagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotAdvantagesComponent]
    });
    fixture = TestBed.createComponent(BotAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
