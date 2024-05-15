import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CanActivate } from './classes/can-activate';
import { environment } from 'src/environments/environment.dev';

const routes: Routes = [
  // Here You Add Your Lazy Loading Modules
  // e.g
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'ایرانی اکسپرت - آموزش فارکس| ترید فارکس| ربات خودکار فارکس',
    loadChildren: () =>
      import('./routes/Home/modules/home.module').then((m) => m.HomeModule),
  },

  {
    canActivate: [() => inject(CanActivate).canActivate()],
    path: 'checkout',
    loadChildren: () =>
      import('./routes/Checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'brokers',
    title: 'مقایسه بروکر ها در ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Brokers/module/broker.module').then(
        (m) => m.BrokerModule
      ),
  },
  {
    path: 'articles',
    title: 'مقالات ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Blog/module/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'shop',
    title: 'فروشگاه ایرانی اکسپرت - ربات فارکس atm - خرید اکسپرت تضمینی',
    loadChildren: () =>
      import('./routes/Shop/module/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'money-management',
    title: 'تکنیک های مدیریت سرمایه (CM) چیست؟اصول مدیریت ریسک و سرمایه گذاری',
    loadChildren: () =>
      import('./routes/Money-Management/module/money-m.module').then(
        (m) => m.MoneymModule
      ),
  },
  {
    path: 'about-us',
    title: 'چرا ما ؟(رضایت مشتری+تماس با ما+ درباره ما+ مشاوره رایگان) ',
    loadChildren: () =>
      import('./routes/About-us/module/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'expert-advisor',
    title:
      'موفقیت های ربات های معامله ‎گر در سال 2023 چیست ؟ نحوه عملکرد + دانلود ',
    loadChildren: () =>
      import('./routes/Robot-trader/module/robot-trader.module').then(
        (m) => m.RobotTraderModule
      ),
  },
  {
    path: 'copy-trade',
    title:
      ' بهترین کپی تریدینگ (copytrading) فارکس در بازارهای مالی 2023| سود تضمینی',
    loadChildren: () =>
      import('./routes/Copy-trade/module/copy-trade.module').then(
        (m) => m.CopyTradeModule
      ),
  },
  {
    // canActivate: [() => (environment.production ? false : true)],
    // redirectTo: environment.production ? '' : undefined,
    path: 'economic-calendar',
    title:
      'اخبار فاندامنتال فارکس  آنلاین  و لحظه ای در سایت فارسی + آپدیت 24 ساعته',

    loadChildren: () =>
      import('./routes/calendar/module/calendar.module').then(
        (m) => m.CalendarModule
      ),
  },
  {
    path: '**',
    title: 'ایرانی اکسپرت ',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
