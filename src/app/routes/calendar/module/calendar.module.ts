import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModuleRouting } from './calendar-routing.module';
import { CalendarMainPageComponent } from '../calendar-main-page/calendar-main-page.component';
import { AutoplaySliderComponent } from 'src/app/shared/autoplay-slider/autoplay-slider.component';
import { AudioPlayerComponent } from 'src/app/shared/audio-player/audio-player.component';
import { CalDetailComponent } from 'src/app/routes/calendar/cal-detail/cal-detail.component';
// import { EcoCalFiltersComponent } from 'src/app/shared/eco-cal-filters/eco-cal-filters.component';
import { Toggler } from 'src/app/shared/toggler/toggler.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportantNewsComponent } from 'src/app/components/important-news/important-news.component';
import { CountriesCurrencyComponent } from 'src/app/components/countries-currency/countries-currency.component';
import { CalendarDescriptionComponent } from '../calendar-description/calendar-description.component';
import { TableCalendar } from 'src/app/routes/calendar/table-calendar/table-calendar.component';
import { ImportanceComponent } from '../importance/importance.component';
import { ResponsiveTableComponent } from '../responsive-table/responsive-table.component';
import { LandingSingleCountryComponent } from '../landing-single-country/landing-single-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarCardResponsiveComponent } from '../calendar-card-responsive/calendar-card-responsive.component';
import { CardFinanceComponent } from '../card-finance/card-finance.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { TradingViewComponent } from 'src/app/components/trading-view/trading-view.component';

import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { GraphContainerComponent } from '../graph-container/graph-container.component';
import { YearSelectorComponent } from 'src/app/shared/year-selector/year-selector.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MapContainerComponent } from '../map-components/map-container/map-container.component';

import { SymbolsComponent } from '../symbols/symbols.component';
import { PaginationControlComponent } from '../pagination-controls/pagination-control/pagination-control.component';
import { ShowMoreComponent } from '../pagination-controls/show-more/show-more.component';

const components = [
  CalendarMainPageComponent,
  ResponsiveTableComponent,
  CountryDetailComponent,
  AutoplaySliderComponent,
  AudioPlayerComponent,
  CalendarCardResponsiveComponent,
  CalDetailComponent,
  ImportantNewsComponent,
  CountriesCurrencyComponent,
  CalendarDescriptionComponent,
  LandingSingleCountryComponent,
  CardFinanceComponent,
  YearSelectorComponent,
  SymbolsComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    PaginationControlComponent,
    GraphContainerComponent,
    ModalComponent,
    ShowMoreComponent,
    MapContainerComponent,
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
    MatDatepickerModule, // <----- import(must)
    MatNativeDateModule, // <----- import for date formating(optional)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
