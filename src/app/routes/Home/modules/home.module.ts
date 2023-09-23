import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { SellInfoComponent } from '../components/sell-info/sell-info.component';

import { HeroComponent } from '../components/hero/hero.component';
import { CounterNumberComponent } from '../components/counter-number/counter-number.component';
import { SliderComponent } from '../components/slider/slider.component';

const components = [LandingPageComponent,HeroComponent,SellInfoComponent,CounterNumberComponent,SliderComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
