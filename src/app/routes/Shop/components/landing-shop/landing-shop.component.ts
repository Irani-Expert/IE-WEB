import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FilterProduct } from 'src/app/classes/interfaces/filter-product.interface';
import { ProductService } from 'src/app/routes/Shop/components/product.service';
import {
  IFilterGroup,
  Type,
} from 'src/app/shared/filter/models/filter.interface';
import {
  Range,
  RatingConfig,
  StarRating,
} from 'src/app/shared/rating/rating-config';

@Component({
  selector: 'app-landing-shop',
  templateUrl: './landing-shop.component.html',
  styleUrls: ['./landing-shop.component.scss'],
})
export class LandingShopComponent {
  loading: boolean = true;
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
  constructor(public _productService: ProductService) {}
  async ngOnInit() {
    if (this._productService._paginatedPrd) {
      this.loading = false;
    } else {
      if (
        await lastValueFrom(
          await this._productService.getProducts(
            'Product/GetProductByFilters',
            new FilterProduct()
          )
        )
      ) {
        this.loading = false;
      }
    }
  }
}
