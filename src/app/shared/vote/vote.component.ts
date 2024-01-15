import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
  text: string = 'عالی';
  rate: number = 3;
  putStyle(n: number, text: string) {
    this.rate = n;
    this.text = text;
  }
}
