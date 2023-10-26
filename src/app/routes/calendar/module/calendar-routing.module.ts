import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';

const routes: Routes = [{ path: '', component: CalendarMainPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarModuleRouting {}
