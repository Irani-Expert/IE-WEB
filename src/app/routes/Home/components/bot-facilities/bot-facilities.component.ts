import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-facilities',
  templateUrl: './bot-facilities.component.html',
  styleUrls: ['./bot-facilities.component.scss'],
})
export class BotFacilitiesComponent {
  testi: boolean = false;
  enableClick() {
    this.testi = !this.testi;
  }
}
