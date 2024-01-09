import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { LandingSearchComponent } from '../../Search/components/landing-search/landing-search.component';
import { RobotTraderComponent } from 'src/app/shared/robot-trader/robot-trader.component';
import { CopyTradeComponent } from 'src/app/components/copy-trade/copy-trade.component';

const routes: Routes = [
  { path: '', title: 'ایرانی اکسپرت - خانه', component: LandingPageComponent },
  { path: 'about-us', title: 'چرا ما؟ ', component: AboutUsComponent },
  {
    path: 'robot-trader',
    title: 'ربات معامله گر ',
    component: RobotTraderComponent,
  },
  {
    path: 'copy-trade',
    title: 'کپی ترید',
    component: CopyTradeComponent,
  },
  { path: 'search', title: 'جستجو', component: LandingSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
