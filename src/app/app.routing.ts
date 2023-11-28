import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    title: 'Home',
    loadChildren: () =>
      import('./routes/Home/modules/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'shop',
    title: 'Shop',
    loadChildren: () =>
      import('./routes/Shop/module/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'checkout',
    title: 'ایرانی اکسپرت',
    loadChildren: () =>
      import('./routes/Checkout/checkout.module').then((m) => m.CheckoutModule),
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
