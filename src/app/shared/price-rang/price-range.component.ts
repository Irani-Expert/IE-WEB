import { Component, Input, Output } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from 'ngx-slider-v2';
import { Range } from 'src/app/shared/rating/rating-config';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss'],
  standalone: true,
  imports: [NgxSliderModule],
})
export class PriceRangeComponent {
  @Output('output') output = new Array<number>();
  @Input('range') data: Range;
  minValue: number = 100;
  maxValue: number = 400;
  options: Options;
  ngOnInit() {
    this.options = {
      floor: this.data.minRangeValue,
      ceil: this.data.maxRangeValue,
      readOnly: this.data.readonly,
      step: 50,
      ticksArray: [0, 200, 400, 600, 800, 1000],
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return ' $' + value;
          case LabelType.High:
            return ' $' + value;
          default:
            return '$' + value;
        }
      },
    };
  }
  outputEmitter() {
    this.output = [this.minValue, this.maxValue];
  }
}
