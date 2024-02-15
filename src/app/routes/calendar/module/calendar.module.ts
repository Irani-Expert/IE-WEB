import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModuleRouting } from './calendar-routing.module';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AutoplaySliderComponent } from 'src/app/shared/autoplay-slider/autoplay-slider.component';
import { AudioPlayerComponent } from 'src/app/shared/audio-player/audio-player.component';
import { CalDetailComponent } from 'src/app/shared/cal-detail/cal-detail.component';
import { TradingviewComponent } from 'src/app/shared/tradingview/tradingview.component';
// import { EcoCalFiltersComponent } from 'src/app/shared/eco-cal-filters/eco-cal-filters.component';
// import { SharedModule } from 'src/app/shared/shared.module';
import { Toggler } from 'src/app/shared/toggler/toggler.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportantNewsComponent } from 'src/app/components/important-news/important-news.component';
import { CountriesCurrencyComponent } from 'src/app/components/countries-currency/countries-currency.component';
import { CalendarDescribtionComponent } from '../calendar-describtion/calendar-describtion.component';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { ImportanceComponent } from '../importance/importance.component';

const components = [
  CalendarMainPageComponent,
  AutoplaySliderComponent,
  AudioPlayerComponent,
  CalDetailComponent,
  TradingviewComponent,
  ImportantNewsComponent,
  CountriesCurrencyComponent,
  CalendarDescribtionComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    Toggler,
    SharedModule,
    ImportanceComponent,
    // FormsModule,
    // ReactiveFormsModule,
    TableCalendar,
    MapsModule,
    CalendarModuleRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
