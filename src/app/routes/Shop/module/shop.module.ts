import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop.routing';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { ShopHeroComponent } from '../components/shop-hero/shop-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionShopComponent } from '../components/question-shop/question-shop.component';
import { DetailCardComponent } from '../components/detail-card/detail-card.component';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';
import { BotOptionsComponent } from '../components/bot-options/bot-options.component';
import { DescriptionComponent } from '../components/description/description.component';
import { LandingProductComponent } from '../components/landing-product/landing-product.component';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { BackTestComponent } from '../components/back-test/back-test.component';
import { SmoothWidthDirective } from 'src/app/classes/directives/smooth-width.directive';
import { DiscountBannerComponent } from 'src/app/shared/discount-banner/discount-banner.component';
import { SliderComponent } from '../../Home/components/slider/slider.component';
import { TableCompareComponent } from '../components/table-compare/table-compare.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../components/filter/filter.component';
import { SearchComponent } from '../components/filter/search-bar/search.component';
import { ShareLinkBoxComponent } from '../components/share-link-box/share-link-box.component';

const components = [
  SliderComponent,
  BackTestComponent,
  ShopHeroComponent,
  DescriptionComponent,
  LandingShopComponent,
  QuestionShopComponent,
  DetailCardComponent,
  BotOptionsComponent,
  LandingProductComponent,
  DiscountBannerComponent,
  TableCompareComponent,
  ShareLinkBoxComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    FilterComponent,
    SearchComponent,
    SmoothWidthDirective,
    CarouselComponent,
    ReactiveFormsModule,
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    Checkbox,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {}
