import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { LandingSingleCountryComponent } from '../landing-single-country/landing-single-country.component';

const routes: Routes = [
  { path: '', component: CalendarMainPageComponent },
  {
    path: ':country',
    component: LandingSingleCountryComponent,
    // title: 'کشور ها',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarModuleRouting {}
