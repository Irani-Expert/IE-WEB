import { Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  device: 'sm' | 'lg' = 'lg';

  constructor() {
    this.updateDeviceValue();
  }
  // ===================[رسپانسیو هیرو]==================
  isActive = 1;

  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive++;
  }
  pre() {
    this.isActive--;
    if (this.isActive == 0) this.isActive = 3;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isTablet()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
}
