import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { LandingSearchComponent } from '../../Search/components/landing-search/landing-search.component';
import { RobotTraderComponent } from 'src/app/shared/robot-trader/robot-trader.component';
import { CopyTradeComponent } from 'src/app/components/copy-trade/copy-trade.component';

const routes: Routes = [
  {
    path: '',
    title: 'ایرانی اکسپرت - آموزش فارکس| ترید فارکس| ربات خودکار فارکس',
    component: LandingPageComponent,
  },
  {
    path: 'about-us',
    title: 'چرا ما ؟(رضایت مشتری+تماس با ما+ درباره ما+ مشاوره رایگان) ',
    component: AboutUsComponent,
  },
  {
    path: 'expert-advisor',
    title:
      'موفقیت های ربات های معامله ‎گر در سال 2023 چیست ؟ نحوه عملکرد + دانلود ',
    component: RobotTraderComponent,
  },
  //موفقیت ربات های معامله گر (traderbot)در سال 2023 چیست؟ نحوه عملکرد +دانلود
  {
    path: 'copy-trade',
    title:
      ' بهترین کپی تریدینگ (copytrading) فارکس در بازارهای مالی 2023| سود تضمینی',
    component: CopyTradeComponent,
  },
  {
    path: 'search',
    title: 'جستجو در ایرانی اکسپرت',
    component: LandingSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
