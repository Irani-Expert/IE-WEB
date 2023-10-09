import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-advantages',
  templateUrl: './bot-advantages.component.html',
  styleUrls: ['./bot-advantages.component.scss'],
})
export class BotAdvantagesComponent {
  activeAdvantages: number = 0;
  chooseAdvantage(id: number) {
    this.activeAdvantages = id;
  }
}
