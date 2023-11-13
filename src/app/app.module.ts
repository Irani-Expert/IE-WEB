import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { HeaderLgComponent } from './components/header-layout/header-lg/header-lg.component';
import { HeaderSmComponent } from './components/header-layout/header-sm/header-sm.component';
import { HeaderAltComponent } from './components/header-layout/header-alt/header-alt.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/header-layout/header-lg/search/search.component';
import { SharedModule } from './shared/shared.module';
import { BaseService } from './classes/services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';
// import { RetryHttpErrorsInterceptor } from './classes/error.interceptor';

// Headeer Comps
const header = [
  HeaderLayoutComponent,
  HeaderLgComponent,
  HeaderSmComponent,
  HeaderAltComponent,
  SearchComponent,
];
// Footer Comps
const footer = [FooterComponent];
@NgModule({
  declarations: [AppComponent, header, footer],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    BaseService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RetryHttpErrorsInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
