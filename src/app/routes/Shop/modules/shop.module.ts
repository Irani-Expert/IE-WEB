import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.modules';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { ShopHeroComponent } from '../components/shop-hero/shop-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionShopComponent } from '../components/question-shop/question-shop.component';

const components = [
  ShopHeroComponent,
  LandingShopComponent,
  QuestionShopComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
