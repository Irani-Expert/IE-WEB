import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/classes/interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input('data') comments: Comment[] = new Array<Comment>();
  rateText: string = 'عالی';
  rate: number = 3;
  putStyle(n: number, text: string) {
    this.rate = n;
    this.rateText = text;
  }
  ngOnInit() {}

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
