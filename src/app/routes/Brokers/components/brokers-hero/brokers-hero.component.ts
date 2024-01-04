import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'brokers-hero',
  templateUrl: './brokers-hero.component.html',
  styleUrls: ['./brokers-hero.component.scss'],
})
export class BrokersHeroComponent {
  navTo() {
    if (AppComponent.isBrowser.value) {
      const element = document.getElementById('readMore');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
