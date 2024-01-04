import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
  text: string = 'عالی';
  leftNum: number = -2.8;
  putStyle(n: number, text: string) {
    this.leftNum = n;
    this.text = text;
  }
}
