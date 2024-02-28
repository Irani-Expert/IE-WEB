import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModuleRouting } from './calendar-routing.module';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { AutoplaySliderComponent } from 'src/app/shared/autoplay-slider/autoplay-slider.component';
import { AudioPlayerComponent } from 'src/app/shared/audio-player/audio-player.component';
import { CalDetailComponent } from 'src/app/shared/cal-detail/cal-detail.component';
// import { EcoCalFiltersComponent } from 'src/app/shared/eco-cal-filters/eco-cal-filters.component';
import { Toggler } from 'src/app/shared/toggler/toggler.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportantNewsComponent } from 'src/app/components/important-news/important-news.component';
import { CountriesCurrencyComponent } from 'src/app/components/countries-currency/countries-currency.component';
import { CalendarDescriptionComponent } from '../calendar-description/calendar-description.component';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
import { ImportanceComponent } from '../importance/importance.component';
import { ResponsiveTableComponent } from '../responsive-table/responsive-table.component';
import { LandingSingleCountryComponent } from '../landing-single-country/landing-single-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarCardResponsiveComponent } from '../calendar-card-responsive/calendar-card-responsive.component';
import { CardFinanceComponent } from '../card-finance/card-finance.component';
import { NgChartsModule } from 'ng2-charts';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { TradingViewComponent } from 'src/app/components/trading-view/trading-view.component';

const components = [
  CalendarMainPageComponent,
  ResponsiveTableComponent,
  AutoplaySliderComponent,
  AudioPlayerComponent,
  CalendarCardResponsiveComponent,
  CalDetailComponent,
  ImportantNewsComponent,
  CountriesCurrencyComponent,
  CalendarDescriptionComponent,
  LandingSingleCountryComponent,
  CardFinanceComponent,
  CountryDetailComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    TradingViewComponent,
    NgChartsModule,
    Toggler,
    SharedModule,
    ImportanceComponent,
    FormsModule,
    ReactiveFormsModule,
    TableCalendar,
    CalendarModuleRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
