import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicePlayerComponent } from './voice-player.component';

describe('VoicePlayerComponent', () => {
  let component: VoicePlayerComponent;
  let fixture: ComponentFixture<VoicePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoicePlayerComponent]
    });
    fixture = TestBed.createComponent(VoicePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
