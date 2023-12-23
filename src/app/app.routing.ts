import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CanActivate } from './classes/can-activate';

const routes: Routes = [
  // Here You Add Your Lazy Loading Modules
  // e.g
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'prefix',
  },
  {
    path: '',
    title: 'ابرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Home/modules/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    title: 'فروشگاه ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Shop/module/shop.module').then((m) => m.ShopModule),
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
    path: 'blog',
    title: 'مقالات ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Blog/module/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'search',
    title: 'مقالات ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Search/module/search.module').then((m) => m.SearchModule),
  },
  // {
  //   path: 'calendar',
  //   title: 'calendar',

  //   loadChildren: () =>
  //     import('./routes/calendar/module/calendar.module').then(
  //       (m) => m.CalendarModule
  //     ),
  // },
  {
    path: '**',
    title: '404 - یافت نشد',
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
