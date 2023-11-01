import { Component } from '@angular/core';

@Component({
  selector: 'app-eco-cal',
  templateUrl: './eco-cal.component.html',
  styleUrls: ['./eco-cal.component.scss'],
})
export class EcoCalComponent {
  openTab: boolean = false;
  openTableTab() {
    this.openTab = !this.openTab;
  }
}
