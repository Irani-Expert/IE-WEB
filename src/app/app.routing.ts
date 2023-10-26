import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Here You Add Your Lazy Loading Modules
  // e.g
  {
    path: '',
    title: 'Home',
    loadChildren: () =>
      import('./routes/Home/modules/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'calendar',
    title: 'calendar',
    loadChildren: () =>
      import('./routes/calendar/module/calendar.module').then(
        (m) => m.CalendarModule
      ),
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
