import { Component, OnInit } from '@angular/core';
import { ICommentInfo } from './comment-info';

@Component({
  selector: 'app-comment-slider',
  templateUrl: './comment-slider.component.html',
  styleUrls: ['./comment-slider.component.scss'],
})
export class CommentSliderComponent implements OnInit {
  upperSlide: number = 2;
  lowwerSlide: number = 0;
  lenCommentModel = [0, 1, 2, 3, 4];
  slidDirection: boolean | null;
  commentModel: ICommentInfo = {
    gender: true,
    firstname: 'معتمدی',
    lastName: 'معتمدی',
    text: ' یکی از چیزهایی که مرا به این ربات جلب کرده، پشتیبانی عالی و مشاوره رایگان است. تیم پشتیبانی همیشه آماده به کمک و راهنمایی است و مشاوران با تجربه خود توانسته‌اند به من راهنمایی‌های مفیدی برای بهبود عملکرد معاملات من ارائه دهند',
  };
  ngOnInit(): void {}
  sliderMovement(direction: boolean | null) {
    this.slidDirection = direction;
    if (direction && this.upperSlide <= this.lenCommentModel.length) {
      this.upperSlide += 2;
      this.lowwerSlide += 2;
    } else if (!direction && 2 <= this.lowwerSlide) {
      this.upperSlide -= 2;
      this.lowwerSlide -= 2;
    }
  }
}
