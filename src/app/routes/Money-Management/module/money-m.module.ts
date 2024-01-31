import { NgModule } from '@angular/core';
import { LandigMoneyMComponent } from '../components/landig-money-m/landig-money-m.component';
import { MoneymRoutingModule } from './money-m.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroMComponent } from '../components/hero-m/hero-m.component';
import { ArticlesMoneyComponent } from '../components/articles-money/articles-money.component';
import { CommonModule } from '@angular/common';

const components = [
  LandigMoneyMComponent,
  HeroMComponent,
  ArticlesMoneyComponent,
];

@NgModule({
  declarations: [components],
  imports: [MoneymRoutingModule, CommonModule, SharedModule],
})
export class MoneymModule {}
