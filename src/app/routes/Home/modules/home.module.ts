import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { SellInfoComponent } from '../components/sell-info/sell-info.component';

const components = [LandingPageComponent,SellInfoComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
