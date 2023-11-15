export class RatingConfig<T> {
  className?: string;
  content: T;
  type: 0 | 1;
  /* @Type == StarRating | Range ,  */
}
export class StarRating {
  readonly: boolean;
  currentRate: number;
  rate: number;
}
export class Range {
  readonly: boolean;
  minRangeValue: number;
  maxRangeValue: number;
}
export class Rating<T> {
  config: RatingConfig<T>;
  star: StarRating = new StarRating();
  range: Range = new Range();
  constructor(config: RatingConfig<T>) {
    this.config = config;
    this.typeDetection(config.content, config.type);
  }
  typeDetection(data: any, type: number) {
    if (type == 1) {
      this.star = data;
    }
    if (type == 0) {
      this.range = data;
    }
  }
}
