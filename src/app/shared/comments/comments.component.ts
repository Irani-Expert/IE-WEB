import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  rateText: string = 'بد';
  rangeRate: number = 0;
  left: string = '96.5%';
  handleClick(event: any) {
    var clickedM = event.offsetX;
    var totalWidth = event.target.clientWidth;
    var calNumber = Math.round((clickedM * 4) / totalWidth);
    console.log(calNumber);

    this.left = String(24 * calNumber) + '%';
    this.rangeRate = (4 - calNumber) * 25;
    this.setRate(5 - calNumber);
  }
  setRate(rate: number) {
    switch (rate) {
      case 1:
        this.rateText = 'خیلی بد';
        break;
      case 2:
        this.rateText = 'بد';
        break;
      case 3:
        this.rateText = 'خوب';
        break;
      case 4:
        this.rateText = 'عالی';
        break;
      default:
        this.rateText = 'ماچ بهت';
    }
  }
}
