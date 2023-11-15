import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Range, Rating, RatingConfig, StarRating } from './rating-config';
import { PriceRangComponent } from '../../routes/Home/components/price-rang/price-rang.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  standalone: true,
  imports: [CommonModule, PriceRangComponent, StarRatingComponent],
})
export class RatingComponent {
  rating: Rating<StarRating | Range>;
  @Output('output') output: EventEmitter<number[]> = new EventEmitter<
    number[]
  >();
  @Input('config') config: RatingConfig<StarRating | Range>;
  ngOnInit() {
    this.rating = new Rating(this.config);
  }
  get star() {
    return this.rating.star;
  }
  get range() {
    return this.rating.range;
  }
  setRange(event: number[]) {
    this.output.emit(event);
  }
  setRate(event: number) {
    let number = [event];
    this.output.emit(number);
  }
}
