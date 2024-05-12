import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { HeroComponent } from '../components/hero/hero.component';
import { BotAdvantagesComponent } from '../components/bot-advantages/bot-advantages.component';
import { LandingArticleComponent } from '../components/landing-article/landing-article.component';
import { BannersComponent } from '../components/banners/banners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';
import { TradeBeginningComponent } from '../components/trade-beginning/trade-beginning.component';
import { CardTitleComponent } from 'src/app/routes/Home/components/card-title/card-title.component';
import { CardLinkComponent } from 'src/app/routes/Home/components/card-link/card-link.component';
import { BotShowcaseComponent } from '../components/bot-showcase/bot-showcase.component';
import { ServiceBanerComponent } from '../components/service-baner/service-baner.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingArticleResponsiveComponent } from '../components/landing-article-responsive/landing-article-responsive.component';
import { SearchModule } from '../../Search/module/search.module';
import { ProductCardComponent } from '../components/product-card/product-card.component';

const components = [
  ServiceBanerComponent,
  QuestionsComponent,
  LandingPageComponent,
  HeroComponent,
  BotShowcaseComponent,
  LandingArticleResponsiveComponent,
  BotAdvantagesComponent,
  LandingArticleComponent,
  BannersComponent,
  ProductCardComponent,
  TradeBeginningComponent,
  CardTitleComponent,
  CardLinkComponent,
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
    SearchModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
