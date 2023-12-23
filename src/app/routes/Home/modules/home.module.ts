import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { SellInfoComponent } from '../components/sell-info/sell-info.component';
import { HeroComponent } from '../components/hero/hero.component';
// import { CounterNumberComponent } from '../components/counter-number/counter-number.component';
// import { SliderComponent } from '../components/slider/slider.component';

import { BotFacilitiesComponent } from '../components/bot-facilities/bot-facilities.component';
import { BotAdvantagesComponent } from '../components/bot-advantages/bot-advantages.component';
import { LandingArticleComponent } from '../components/landing-article/landing-article.component';
import { ConsultationFormComponent } from '../components/consultation-form/consultation-form.component';
import { BannersComponent } from '../components/banners/banners.component';
import { ProductsComponent } from '../components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeFilterComponent } from '../components/type-filter/type-filter.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { OrderFilterComponent } from 'src/app/shared/order-filter/order-filter.component';
import { SearchFeildComponent } from 'src/app/shared/search-feild/search-feild.component';
import { TradeBeginningComponent } from '../components/trade-beginning/trade-beginning.component';
import { CardTitleComponent } from 'src/app/shared/card-title/card-title.component';
import { CardLinkComponent } from 'src/app/shared/card-link/card-link.component';
import { BotShowcaseComponent } from '../components/bot-showcase/bot-showcase.component';
import { InstagramBanerComponent } from '../components/instagram-baner/instagram-baner.component';
import { ServiceBanerComponent } from '../components/service-baner/service-baner.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from 'src/app/shared/product-card/product-card.component';
import { LandingArticleResponsiveComponent } from '../components/landing-article-responsive/landing-article-responsive.component';
import { AboutusTargetsComponent } from '../components/aboutus-targets/aboutus-targets.component';
import { CommentSliderComponent } from '../components/comment-slider/comment-slider.component';
import { VideoSliderComponent } from '../components/video-slider/video-slider.component';

const components = [
  ServiceBanerComponent,
  QuestionsComponent,
  InstagramBanerComponent,
  LandingPageComponent,
  HeroComponent,
  SellInfoComponent,
  BotShowcaseComponent,
  CommentSliderComponent,
  BotFacilitiesComponent,
  LandingArticleResponsiveComponent,
  BotAdvantagesComponent,
  LandingArticleComponent,
  VideoSliderComponent,
  ConsultationFormComponent,
  BannersComponent,
  ProductCardComponent,
  ProductsComponent,
  TypeFilterComponent,
  AboutUsComponent,
  OrderFilterComponent,
  SearchFeildComponent,
  TradeBeginningComponent,
  CardTitleComponent,
  CardLinkComponent,
  AboutusTargetsComponent,
  // DiscountBannerComponent,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
