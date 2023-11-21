import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from '../rating/rating-config';
class Stars {
  value: number;
  filled: boolean;
  iconPath?: string;
  caption?: string;
}
@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Output('output') output = new EventEmitter<number>();
  @Input('stars') stars: StarRating;
  @Input('captions') captions: string[];
  starsArray: Array<Stars> = new Array<Stars>();
  // iconPathes = ['assets/icon/star.svg', 'assets/icon/star-filled.svg'];
  constructor() {}
  ngOnInit() {
    for (let i = 0; i < this.stars.rate; i++) {
      if (this.stars.currentRate > i)
        this.starsArray.push({
          filled: true,
          value: i,
          // iconPath: this.iconPathes[1],
        });
      else
        this.starsArray.push({
          filled: false,
          value: i,
          // iconPath: this.iconPathes[0],
        });
    }
  }
  changeFilled(item: Stars) {
    if (this.stars.readonly) {
      return;
    } else {
      if (item.value < this.stars.currentRate) {
        return;
      } else {
        this.starsArray.forEach((it) =>
          it.value <= item.value ? (it.filled = true) : (it.filled = false)
        );
      }
    }
  }
  backToDefault() {
    this.starsArray.forEach((item) =>
      item.value < this.stars.currentRate
        ? (item.filled = true)
        : (item.filled = false)
    );
  }
  fillAndChangeValue(item: Stars) {
    if (this.stars.readonly) {
      return;
    } else {
      this.stars.currentRate = item.value + 1;
      this.starsArray.forEach((it) =>
        it.value < this.stars.currentRate
          ? (it.filled = true)
          : (it.filled = false)
      );
      this.output.emit(this.stars.currentRate);
    }
  }
}
