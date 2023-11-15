import { Component } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from 'ngx-slider-v2';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-rang.component.html',
  styleUrls: ['./price-rang.component.scss'],
  standalone: true,
  imports: [NgxSliderModule],
})
export class PriceRangComponent {
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
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
