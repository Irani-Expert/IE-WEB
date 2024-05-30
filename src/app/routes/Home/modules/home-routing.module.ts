import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { LandingSearchComponent } from '../../Search/components/landing-search/landing-search.component';
import { AuthMailComponent } from 'src/app/components/auth-mail/auth-mail.component';
import { RulesPageComponent } from 'src/app/components/rules-page/rules-page.component';

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
  {
    path: 'auth-mail',
    title: 'تایید ایمیل',
    component: AuthMailComponent,
  },
  {
    path: 'rules',
    title: 'قوانین سایت',
    component: RulesPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
