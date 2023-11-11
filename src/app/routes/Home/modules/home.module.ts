import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { SellInfoComponent } from '../components/sell-info/sell-info.component';
import { HeroComponent } from '../components/hero/hero.component';
// import { CounterNumberComponent } from '../components/counter-number/counter-number.component';
import { SliderComponent } from '../components/slider/slider.component';
import { BotFacilitiesComponent } from '../components/bot-facilities/bot-facilities.component';
import { BotAdvantagesComponent } from '../components/bot-advantages/bot-advantages.component';
import { LandingArticleComponent } from '../components/landing-article/landing-article.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { ConsultationFormComponent } from '../components/consultation-form/consultation-form.component';
import { GiftFormComponent } from '../components/gift-form/gift-form.component';
import { BannersComponent } from '../components/banners/banners.component';
import { ProductsComponent } from '../components/products/products.component';
import { DetailCardComponent } from '../components/detail-card/detail-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { TypeFilterComponent } from '../components/type-filter/type-filter.component';
import { PriceRangComponent } from '../components/price-rang/price-rang.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { OrderFilterComponent } from 'src/app/shared/order-filter/order-filter.component';
import { SearchFeildComponent } from 'src/app/shared/search-feild/search-feild.component';
import { TradeBeginningComponent } from '../components/trade-beginning/trade-beginning.component';
import { ProductCardComponent } from 'src/app/shared/product-card/product-card.component';
import { CardTitleComponent } from 'src/app/shared/card-title/card-title.component';
import { CardLinkComponent } from 'src/app/shared/card-link/card-link.component';
import { DiscountBannerComponent } from 'src/app/shared/discount-banner/discount-banner.component';
import { BotShowcaseComponent } from '../components/bot-showcase/bot-showcase.component';
import { InstagramBanerComponent } from '../components/instagram-baner/instagram-baner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceBanerComponent } from '../components/service-baner/service-baner.component';
import { QuestionsComponent } from '../components/questions/questions.component';

const components = [
  ServiceBanerComponent,
  QuestionsComponent,
  InstagramBanerComponent,
  LandingPageComponent,
  HeroComponent,
  SellInfoComponent,
  BotShowcaseComponent,
  // CounterNumberComponent,
  SliderComponent,
  BotFacilitiesComponent,
  BotAdvantagesComponent,
  LandingArticleComponent,
  VideoPlayerComponent,
  ConsultationFormComponent,
  GiftFormComponent,
  BannersComponent,
  ProductCardComponent,
  GiftFormComponent,
  ProductsComponent,
  DetailCardComponent,
  TypeFilterComponent,
  PriceRangComponent,
  AboutUsComponent,
  OrderFilterComponent,
  SearchFeildComponent,
  TradeBeginningComponent,
  CardTitleComponent,
  CardLinkComponent,
  DiscountBannerComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule,
    SharedModule,
    StarRatingModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
