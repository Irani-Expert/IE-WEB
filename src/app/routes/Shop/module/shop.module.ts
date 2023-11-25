import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop.routing';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { ShopHeroComponent } from '../components/shop-hero/shop-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionShopComponent } from '../components/question-shop/question-shop.component';
import { RatingComponent } from 'src/app/shared/rating/rating.component';
import { DetailCardComponent } from '../components/detail-card/detail-card.component';
import { Checkbox } from 'src/app/shared/checkbox/checkbox.component';
import { FilterComponent } from 'src/app/shared/filter/filter.component';
import { SearchComponent } from 'src/app/shared/filter/search-bar/search.component';
import { BotOptionsComponent } from '../components/bot-options/bot-options.component';

const components = [
  ShopHeroComponent,
  LandingShopComponent,
  QuestionShopComponent,
  DetailCardComponent,
  BotOptionsComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RatingComponent,
    FilterComponent,
    RatingComponent,
    Checkbox,
    SearchComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {}
