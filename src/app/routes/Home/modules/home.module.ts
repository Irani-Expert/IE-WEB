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

const components = [
  LandingPageComponent,
  HeroComponent,
  SellInfoComponent,
  // CounterNumberComponent,
  SliderComponent,
  BotFacilitiesComponent,
  BotAdvantagesComponent,
  LandingArticleComponent,
  VideoPlayerComponent,
  ConsultationFormComponent,
  GiftFormComponent,
  BannersComponent,
  ProductsComponent,
  DetailCardComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
