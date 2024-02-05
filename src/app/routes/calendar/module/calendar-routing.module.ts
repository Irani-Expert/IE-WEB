import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { MapCountryComponent } from '../map-country/map-country.component';

const routes: Routes = [
  { path: '', component: CalendarMainPageComponent },
  {
    path: 'map-testing',
    component: MapCountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarModuleRouting {}
