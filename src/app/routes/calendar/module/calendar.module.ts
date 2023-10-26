import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModuleRouting } from './calendar-routing.module';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';

const components = [CalendarMainPageComponent];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    MapsModule,
    CalendarModuleRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
