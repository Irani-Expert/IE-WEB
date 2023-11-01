import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-detail',
  templateUrl: './cal-detail.component.html',
  styleUrls: ['./cal-detail.component.scss'],
})
export class CalDetailComponent {
  choosenlink: number = 0;
  selectLink(num: number) {
    this.choosenlink = num;
  }
}
