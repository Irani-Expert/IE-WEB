import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/classes/interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input('data') comments: Comment[] = new Array<Comment>();
  rateText: string = 'بد';
  rangeRate: number = 25;
  left: string = '72%';
  handleClick(event: any) {
    var clickedM = event.offsetX;
    var totalWidth = event.target.clientWidth;
    var calNumber = Math.round((clickedM * 4) / totalWidth);
    console.log(calNumber);

    this.left = String(24 * calNumber) + '%';
    this.rangeRate = (4 - calNumber) * 25;
    this.setRate(5 - calNumber);
  }
  ngOnInit() {}
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
  // ===================[رسپانسیو ]==================
  constructor() {}
  device: 'sm' | 'lg' = 'lg';

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.updateDeviceValue();
  // }
  // updateDeviceValue() {
  //   if (AppComponent.isBrowser.value) {
  //     if (Utils.isTablet()) {
  //       this.device = 'sm';
  //     } else {
  //       this.device = 'lg';
  //     }
  //   }
  // }
}
