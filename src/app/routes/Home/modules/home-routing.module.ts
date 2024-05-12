import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { LandingSearchComponent } from '../../Search/components/landing-search/landing-search.component';

const routes: Routes = [
  {
    path: '',
    title: 'ایرانی اکسپرت - آموزش فارکس| ترید فارکس| ربات خودکار فارکس',
    component: LandingPageComponent,
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
