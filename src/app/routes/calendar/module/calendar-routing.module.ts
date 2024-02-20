import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { MapComponent } from '../map/map/map.component';

const routes: Routes = [
  { path: '', component: CalendarMainPageComponent },
  {
    path: 'maps',
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarModuleRouting {}
