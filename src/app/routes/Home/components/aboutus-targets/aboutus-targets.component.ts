import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus-targets',
  templateUrl: './aboutus-targets.component.html',
  styleUrls: ['./aboutus-targets.component.scss'],
})
export class AboutusTargetsComponent {
  id = [true, false, false, false];
  isActive(num: number): boolean {
    return this.id[num];
  }
  selectedTab(num: number) {
    this.id.fill(false);
    this.id[num] = true;
  }
}
