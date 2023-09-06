import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';

const components = [LandingPageComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
