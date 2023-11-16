import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './classes/services/platform.service';
import { ModalService } from './shared/modal/services/modal.service';
import { IFilterGroup, Type } from './shared/filter/models/filter.interface';
import { Range, RatingConfig, StarRating } from './shared/rating/rating-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalStatus;
  filter: IFilterGroup[] = [
    {
      active: false,
      chevronState: 'default',
      id: 1,
      title: 'دسته بندی',
      type: Type.Category,
    },
    {
      active: false,
      chevronState: 'default',
      id: 2,
      title: 'امتیاز',
      type: Type.Rating,
    },
    {
      active: false,
      chevronState: 'default',
      id: 3,
      title: 'محدوده قیمت',
      type: Type.PriceRange,
    },
    {
      active: false,
      chevronState: 'default',
      id: 4,
      title: 'تولید کننده',
      type: Type.Producer,
    },
  ];
  ratingConfig: RatingConfig<StarRating> = {
    content: { currentRate: 0, rate: 5, readonly: false },
    type: 1,
  };
  rangeConfig: RatingConfig<Range> = {
    content: { maxRangeValue: 1000, minRangeValue: 0, readonly: false },
    type: 0,
  };
  static isBrowser = new BehaviorSubject<boolean>(false);
  title = 'IE-WEB';
  constructor(private platform: PlatformService, private modal: ModalService) {
    this.modalStatus = this.modal.modalStatusSubject;
    if (this.platform.isPlatformBrowser()) AppComponent.isBrowser.next(true);
  }
}
